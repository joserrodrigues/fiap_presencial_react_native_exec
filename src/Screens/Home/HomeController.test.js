import React from 'react';
import renderer from 'react-test-renderer';
import api from '../../Services/APIs/Common/api';
import MockAdapter from "axios-mock-adapter";
import { NavigationContainer } from '@react-navigation/native';

import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import HomeController from './HomeController';
import { StackHome } from '../../Routes/RouteController';

const fakeList = {
    persons: [
        {
            id: 0,
            firstName: 'Geny',
            lastName: 'Batista',
            jobTitle: 'Assistente Configuração Interno',
            jobArea: 'Diretivas',
            jobDescriptor: 'Internacional',
            jobType: 'Associado',
            address: '16659 Eliana Marginal',
            zipCode: '96749-400',
            city: 'Nova Taiane',
            state: 'AL',
            coutry: 'Algéria',
            phone: '(39) 0220-0167',
            CPF: '30532433424',
            latitude: '27.4159',
            longitude: '-115.0988',
            image: 'https://random.imagecdn.app/500/200'
        }
    ]
};
jest.useRealTimers();
jest.setTimeout(30000);
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

describe('<HomeController />', () => {
    it('Check Initial Case', async () => {
        if (global.__isMocking__) {
            mock.onGet('/persons/getPersons').reply(200, fakeList);
        }
        
        const navigation = useNavigation();
        const tree = renderer.create(
            <HomeController navigation={navigation} />
        ).toJSON();
        expect(tree.children.length).toBe(3);
        expect(tree).toMatchSnapshot();
    });

    it('Mocking Info', async () => {
        if (global.__isMocking__) {
            mock.onGet('/persons/getPersons').reply(200, fakeList);
        }

        const navigation = useNavigation();
        const { getByTestId } = render(<HomeController navigation={navigation} />);

        const element = await waitForElementToBeRemoved(() => getByTestId('activityLoading'),
            { timeout: 1000500, interval: 10000 });
        expect(element).toBeTruthy();
        const flatList = getByTestId('flatListHome');
        console.log("# of regiters = " + flatList._fiber.stateNode.props.data.length);
        if (global.__isMocking__) {
            expect(flatList._fiber.stateNode.props.data.length).toBeLessThanOrEqual(50);
        } else {
            expect(flatList._fiber.stateNode.props.data.length).toBeGreaterThanOrEqual(50);
        }
    });


    it('Click Home Info', async () => {
        if (global.__isMocking__) {
            mock.onGet('/persons/getPersons').reply(200, fakeList);
        }

        const { getByTestId, getByText } = render(
            <NavigationContainer>
                <StackHome />
            </NavigationContainer>
        );

        const element = await waitForElementToBeRemoved(() => getByTestId('activityLoading'),
            { timeout: 1000500, interval: 10000 });
        expect(element).toBeTruthy();
        const flatList = getByTestId('flatListHome');
        console.log("# of regiters = " + flatList._fiber.stateNode.props.data.length);
        if (global.__isMocking__) {
            expect(flatList._fiber.stateNode.props.data.length).toBeLessThanOrEqual(50);
        } else {
            expect(flatList._fiber.stateNode.props.data.length).toBeGreaterThanOrEqual(50);
        }

        const firstItem = flatList._fiber.stateNode.props.data[0];
        console.log(firstItem.CPF.toString());

        let firstButton = getByTestId("button" + firstItem.CPF.toString());
        expect(firstButton).toBeTruthy();
        fireEvent.press(firstButton);

        const newScreen = await getByText('Detalhe');
        expect(newScreen).toBeTruthy();
    });
});