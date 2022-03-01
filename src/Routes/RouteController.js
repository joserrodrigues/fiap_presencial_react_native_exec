import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { registerRootComponent } from 'expo';
import { Icon } from 'react-native-elements';

import Colors from '../Utils/Constants/Colors';
import HomeController from '../Screens/Home/HomeController';
import DetailController from '../Screens/Detail/DetailController';
import MyPositionController from '../Screens/MyPosition/MyPositionController';
import MyInfoController from '../Screens/MyInfo/MyInfoController';
import LoginController from '../Screens/Login/LoginController';

import store from '../store/stores';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import SideMenu from '../Components/SideMenu/SideMenu';
import { useGetStorageItem } from '../Services/Storage/StorageServices';
import { stopLoadUserInfo, logout } from '../store/modules/login/actions';
import { useManageNofification } from '../Services/Notification/ManageNotification';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
    headerShown: true,
    headerStyle: {
        backgroundColor: Colors.HeaderBackgroundColor,
    },
    headerTintColor: Colors.HeaderTintColor,
    headerLayoutPreset: 'center',
};

export function StackHome() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeController}
                options={{ ...screenOptions, title: "Home" }} />
            <Stack.Screen name="Details" component={DetailController}
                options={{ ...screenOptions, title: "Detalhe" }} />
        </Stack.Navigator>
    );
}



export function MainRouteController() {

    const navigationRef = React.useRef();
    let hasToken = false;

    const dispatch = useDispatch();
    const getAsyncInfo = async () => {
        useGetStorageItem("userInfo").then((info) => {
            dispatch(stopLoadUserInfo(info));
        })
    }

    const onLogout = () => {        
        dispatch(logout());   
    }

    const receiveNotification = (notification, type) => {
        console.log("Chegou Notificacao");
        const notificationData = notification.request.content.data;
        if (notificationData.hasOwnProperty('infoScreen')) {
            if (navigationRef.current.getCurrentRoute().name !== "LoginScreen") {
                navigationRef.current.navigate('MyInfo')
            }
        } else {
            console.log("Nnao possui Data");
        }
    }

    const StackMyInfo = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="MyInfo" component={MyInfoController}
                    options={{ ...screenOptions, title: "Minhas Informações" }} />
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
    
    const userInfo = useSelector((state) => state.loginSaga.userInfo);    
    if (userInfo !== undefined && userInfo !== null) {
        hasToken = true;
    } else {
        getAsyncInfo();
    }
    console.log("hasToken = " + hasToken);

    useManageNofification(receiveNotification);

    if (!hasToken) {
        return (
            <NavigationContainer ref={(nav) => {
                navigationRef.current = nav;
            }}>
                <Stack.Navigator>
                    <Stack.Screen name="LoginScreen" component={LoginController}
                        options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer ref={(nav) => {
                navigationRef.current = nav;
            }}>
                <Drawer.Navigator
                    initialRouteName="Main"
                    // openByDefault="open"
                    drawerContent={(props) =>                        
                        <SideMenu userInfo={userInfo} logout={onLogout} {...props} />
                    }
                    drawerStyle={{
                        backgroundColor: Colors.Red,
                        width: 240,
                    }}
                    drawerContentOptions={{
                        activeTintColor: Colors.White,
                        inactiveTintColor: Colors.DarkGrey,
                    }}
                    headerShown={false}
                    >
                    <Drawer.Screen name="Main" component={StackHome}             
                        options={{
                            drawerIcon: ({ color, size }) => {
                                return (
                                    <Icon
                                        name='home'
                                        type='font-awesome'
                                        size={size}
                                        color={color}
                                    />
                                )
                            }
                            
                        }} 
                    />
                    <Drawer.Screen name="MyInfo" component={StackMyInfo}
                        options={{
                            drawerLabel: 'Minha Informação',
                            drawerIcon: ({ color, size }) => (
                                <Icon
                                    name='info-circle'
                                    type='font-awesome-5'
                                    size={size}
                                    color={color}
                                />
                            ) }} />
                    <Drawer.Screen name="MyPosition" component={StackMyPosition}
                        options={{
                            drawerLabel: 'Minha Posição',
                            drawerIcon: ({ color, size }) => (
                                <Icon
                                    name='location'
                                    type='ionicon'
                                    size={size}
                                    color={color}
                                />
                            ) }} />
                </Drawer.Navigator>
            </NavigationContainer>
        );    
    }
}


function RouteController() {
    return (
        <Provider store={store}>
            <MainRouteController />
        </Provider>
    )
}

export default registerRootComponent(RouteController);