import React from 'react';
import renderer from 'react-test-renderer';
import api from '../../Services/APIs/Common/api';
import MockAdapter from "axios-mock-adapter";

import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginController from './LoginController';
import store from '../../store/stores';
import { loginFinish } from '../../store/modules/login/actions';
import { Provider } from 'react-redux';


jest.setTimeout(30000);
jest.useFakeTimers();

const fakeLogin = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1YmVuc0BzY2',
    userId: '6207f78500e679092b819156',
    name: 'Rubens 2',
    phone: '11971745577'
};

beforeAll(() => {
    console.log(" IS MOCKING = " + global.__isMocking__);
    if (global.__isMocking__) {
        mock = new MockAdapter(api);
    }
});

afterEach(() => {
    if (global.__isMocking__) {
        mock.reset();
    }
});

describe('<LoginController />', () => {

    it('Check Initial Case', async () => {
        
        store.dispatch(loginFinish(null));

        const tree = renderer.create(
            <Provider store={store}>
                <LoginController />
            </Provider>
        ).toJSON();
        expect(tree.children.length).toBe(1);
        expect(tree).toMatchSnapshot();
    });

    it('Check Empty Form', async () => {

        await store.dispatch(loginFinish(null));

        const { getByText, getByTestId, getByPlaceholderText } = render(
            <Provider store={store}>
                <LoginController />
            </Provider>
        );

        const emailInput = getByPlaceholderText("E-mail");
        expect(emailInput).toBeTruthy();

        const passInput = getByPlaceholderText("Senha");
        expect(passInput).toBeTruthy();

        const button = getByTestId('loginButton');
        expect(button).toBeTruthy();
        fireEvent.press(button);

        let infoEmail = await waitFor(() => getByText('E-mail é obrigatório'));
        expect(infoEmail).toBeTruthy();
        let infoPass = await waitFor(() => getByText('Senha é obrigatório'));
        expect(infoPass).toBeTruthy();
    });

    it('Check Invalid E-mail', async () => {
        const { getByText, getByTestId, getByPlaceholderText } = render(
            <Provider store={store}>
                <LoginController />
            </Provider>
        );

        const emailInput = getByPlaceholderText("E-mail");
        expect(emailInput).toBeTruthy();

        const passInput = getByPlaceholderText("Senha");
        expect(passInput).toBeTruthy();

        const button = getByTestId('loginButton');
        expect(button).toBeTruthy();

        fireEvent.changeText(emailInput, 'hello');
        fireEvent.changeText(passInput, '123');
        fireEvent.press(button);

        await waitFor(() => {
            expect(getByText('E-mail não válido')).toBeTruthy();
            expect(getByText('Senha é curta - deveria ter ao menos 4 caracteres')).toBeTruthy();
        })
    });

    it('Check Invalid User', async () => {

        if (global.__isMocking__) {
            mock.onPost('/storeProducts/login').reply(201, fakeLogin);
        }

        const { getByText, getByTestId, getByPlaceholderText } = render(
            <Provider store={store}>
                <LoginController />
            </Provider>
        );

        const emailInput = getByPlaceholderText("E-mail");
        expect(emailInput).toBeTruthy();

        const passInput = getByPlaceholderText("Senha");
        expect(passInput).toBeTruthy();

        const button = getByTestId('loginButton');
        expect(button).toBeTruthy();

        fireEvent.changeText(emailInput, 'rubens@schoolguardian.app');
        fireEvent.changeText(passInput, '123456789');
        fireEvent.press(button);

        const element = await waitFor(() => getByText('Usuário ou login inválido'),
            { timeout: 1000500, interval: 500 });
        expect(element).toBeTruthy();
    });

    it('Check Valid User', async () => {

        if (global.__isMocking__) {
            mock.onPost('/storeProducts/login').reply(200, fakeLogin);
        }
        const { getByText, getByTestId, getByPlaceholderText } = render(
            <Provider store={store}>
                <LoginController />
            </Provider>
        );

        const emailInput = getByPlaceholderText("E-mail");
        expect(emailInput).toBeTruthy();

        const passInput = getByPlaceholderText("Senha");
        expect(passInput).toBeTruthy();

        const button = getByTestId('loginButton');
        expect(button).toBeTruthy();

        fireEvent.changeText(emailInput, 'rubens@schoolguardian.app');
        fireEvent.changeText(passInput, '123456');
        fireEvent.press(button);

        const element = await waitFor(() => getByText('Login com Sucesso'),
            { timeout: 1000500, interval: 500 });
        expect(element).toBeTruthy();
    });
});