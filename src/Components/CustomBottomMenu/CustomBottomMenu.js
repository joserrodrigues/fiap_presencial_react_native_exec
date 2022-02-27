import React from 'react';
import { View } from 'react-native';
import { Icon, Text, BottomSheet, ListItem } from 'react-native-elements';
import styles from './CustomBottomMenuStyle';
import PropTypes from 'prop-types';

const CustomBottomMenu = ({ pickImage, showPhotoOptions, toggleCameraOptions, listItems }) => {

    let arrayItems = [];
    let ind = 0; 
    listItems.forEach(item => {
        let itemBox = (
            <ListItem.Title key={ind} onPress={() => pickImage(item.return)} style={styles.bottomSheetItem}>
                <View style={styles.bottomSheetItemView}>
                    <Icon
                        name={item.icon}
                        type='font-awesome'
                        color={Colors.Black}
                        size={13}
                        style={styles.bottomSheetItemIcon}
                    />
                    <Text>{item.title}</Text>
                </View>
            </ListItem.Title>
        );
        arrayItems.push(itemBox);
        ind++;
    });
    return (
        <BottomSheet modalProps={{}} isVisible={showPhotoOptions}>
            <ListItem
                containerStyle={styles.containerStyle}>
                <ListItem.Content>
                    {arrayItems}
                    <ListItem.Title onPress={toggleCameraOptions} style={styles.bottomSheetCancelItem}>
                        <View style={styles.bottomSheetItemView}>
                            <Icon
                                name='times'
                                type='font-awesome'
                                color={Colors.Red}
                                size={13}
                                style={styles.bottomSheetItemIcon}
                            />
                            <Text style={styles.bottomSheetCancelItemText} >Cancelar</Text>
                        </View>
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </BottomSheet>
    );
};

CustomBottomMenu.propTypes = {
    pickImage: PropTypes.func.isRequired,
    showPhotoOptions: PropTypes.bool.isRequired,
    toggleCameraOptions: PropTypes.func.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        return: PropTypes.number.isRequired,
    })).isRequired
};


export default CustomBottomMenu;