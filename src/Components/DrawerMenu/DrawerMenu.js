import React, { useLayoutEffect } from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Constants/Colors';

const DrawerMenu = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}
                    style={{ padding: 5 }}>
                    <Icon
                        name='bars'
                        type='font-awesome'
                        size={20}
                        color={Colors.HeaderTintColor}
                        style={{ marginLeft: 10 }}
                    />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    return null;
}

export default DrawerMenu;