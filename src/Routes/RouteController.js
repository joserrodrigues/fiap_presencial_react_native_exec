import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { registerRootComponent } from 'expo';

import Colors from '../Utils/Constants/Colors';
import HomeController from '../Screens/Home/HomeController';
import DetailController from '../Screens/Detail/DetailController';
import MyPositionController from '../Screens/MyPosition/MyPositionController';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

    const StackMyPosition = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="MyPosition" component={MyPositionController}
                    options={{ ...screenOptions, title: "Minha Posição" }} />
            </Stack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Main" >
                <Drawer.Screen name="Main" component={StackHome}
                    options={{ title: 'Main', headerShown: false }} />
                <Drawer.Screen name="MyPosition" component={StackMyPosition}
                    options={{ title: 'Minha Posição', headerShown: false }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );    
}


export default registerRootComponent(RouteController);