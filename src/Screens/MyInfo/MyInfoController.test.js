import React from 'react';
import renderer from 'react-test-renderer';
import MyInfoController from './MyInfoController';
import store from '../../store/stores';
import { Provider } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

jest.setTimeout(30000);
jest.useFakeTimers();

beforeAll(() => {

});

afterEach(() => {

});

describe('<MyInfoController />', () => {

    it('Check Initial Case', async () => {
        const navigation = useNavigation();
        const tree = renderer.create(
            <Provider store={store}>
                <MyInfoController navigation={navigation} />
            </Provider>
        ).toJSON();
        expect(tree.children.length).toBe(2);
        expect(tree).toMatchSnapshot();
    });

    it('Check Empty Form', async () => {

        const navigation = useNavigation();
        const { getByText, getByTestId, getByPlaceholderText } = render(
            <Provider store={store}>
                <MyInfoController navigation={navigation} />
            </Provider>
        );

        const nameInput = getByPlaceholderText("Nome");
        expect(nameInput).toBeTruthy();

        const emailInput = getByPlaceholderText("E-mail");
        expect(emailInput).toBeTruthy();

        const passInput = getByPlaceholderText("Senha");
        expect(passInput).toBeTruthy();

        const confirmPassInput = getByPlaceholderText("Confirmar senha");
        expect(confirmPassInput).toBeTruthy();

        const button = getByTestId('saveButton');
        expect(button).toBeTruthy();
        fireEvent.press(button);

        let infoEmail = await waitFor(() => getByText('E-mail é obrigatório'));
        expect(infoEmail).toBeTruthy();
        let infoPass = await waitFor(() => getByText('Senha é obrigatório'));
        expect(infoPass).toBeTruthy();
    });

    it('Check Invalid E-mail', async () => {
        const navigation = useNavigation();
        const { getByText, getByTestId, getByPlaceholderText } = render(
            <Provider store={store}>
                <MyInfoController navigation={navigation}/>
            </Provider>
        );

        const emailInput = getByPlaceholderText("E-mail");
        expect(emailInput).toBeTruthy();

        const passInput = getByPlaceholderText("Senha");
        expect(passInput).toBeTruthy();

        const button = getByTestId('saveButton');
        expect(button).toBeTruthy();

        fireEvent.changeText(emailInput, 'hello');
        fireEvent.changeText(passInput, '123');
        fireEvent.press(button);

        await waitFor(() => {
            expect(getByText('E-mail não válido')).toBeTruthy();
            expect(getByText('Senha é curta - deveria ter ao menos 4 caracteres')).toBeTruthy();
        })
    });

    it('Check PassWord Must Match', async () => {
        const navigation = useNavigation();
        const { getByText, getByTestId, getByPlaceholderText } = render(
            <Provider store={store}>
                <MyInfoController navigation={navigation}/>
            </Provider>
        );

        const emailInput = getByPlaceholderText("E-mail");
        expect(emailInput).toBeTruthy();

        const passInput = getByPlaceholderText("Senha");
        expect(passInput).toBeTruthy();

        const confirmPassInput = getByPlaceholderText("Confirmar senha");
        expect(confirmPassInput).toBeTruthy();

        const button = getByTestId('saveButton');
        expect(button).toBeTruthy();

        fireEvent.changeText(emailInput, 'a@a.com');
        fireEvent.changeText(passInput, '1234');
        fireEvent.changeText(confirmPassInput, '123');
        fireEvent.press(button);

        await waitFor(() => {
            expect(getByText('As senhas devem ser iguais')).toBeTruthy();
        })
    });
});