import React from 'react';
import { View } from 'react-native';
import { Icon, Text} from 'react-native-elements';
import styles from './SideMenuStyle';
import PropTypes from 'prop-types';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


const SideMenu = (props) => {
    let firstLetter = props.userInfo.name.charAt(0);
    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            <View style={styles.boxUserInfo}>
                <View style={styles.iconView}>
                    <Text style={styles.iconText}>{firstLetter}</Text>
                </View>
                <Text style={styles.welcomeText}>Olá, {props.userInfo.name}</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                inactiveTintColor={props.inactiveTintColor}
                icon={({ color, size}) =>
                    <Icon
                        name='exit'
                        type='ionicon'
                        size={size}
                        color={color}
                    />
                }
                onPress={props.logout}
            />
        </DrawerContentScrollView>
    );    
};

SideMenu.propTypes = {
    logout: PropTypes.func.isRequired,
    userInfo: PropTypes.shape({
        name: PropTypes.string,
    }).isRequired,
};


export default SideMenu;