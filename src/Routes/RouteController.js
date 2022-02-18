import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';

import Colors from '../Utils/Constants/Colors';
import HomeController from '../Screens/Home/HomeController';
import DetailController from '../Screens/Detail/DetailController';

const Stack = createStackNavigator();

function RouteController() {

    let screenOptions = {
        headerShown: true,
        headerStyle: {
            backgroundColor: Colors.HeaderBackgroundColor,
        },
        headerTintColor: Colors.HeaderTintColor,
        headerLayoutPreset: 'center',
    };

    const StackHome = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeController}
                    options={screenOptions} />
                <Stack.Screen name="Details" component={DetailController}
                    options={screenOptions} />
            </Stack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <StackHome />
        </NavigationContainer>
    );
}


export default registerRootComponent(RouteController);