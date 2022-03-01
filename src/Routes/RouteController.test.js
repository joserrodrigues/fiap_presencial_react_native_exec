import React from 'react';
import { MainRouteController } from './RouteController';

import { Provider } from 'react-redux';
import store from '../store/stores';
import { loginFinish } from '../store/modules/login/actions';
import { render, waitFor } from '@testing-library/react-native';


jest.useFakeTimers();
describe('<RouteController />', () => {
    it('Testing Open Login', async () => {

        store.dispatch(loginFinish(null));

        const { getByTestId, debug } = render(
            <Provider store={store}>
                <MainRouteController />
            </Provider>
        );

        const button = getByTestId('loginButton');
        expect(button).toBeTruthy();
    });

    it('Testing Open Home', async () => {

        store.dispatch(loginFinish({
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1YmVuc0BzY2',
            userId: '6207f78500e679092b819156',
            name: 'Rubens 2',
            phone: '11971745599'
        }));

        const { getByText } = render(
            <Provider store={store}>
                <MainRouteController />
            </Provider>
        );

        const home = await waitFor(() => getByText('Home'));
        expect(home).toBeTruthy();
    });
});