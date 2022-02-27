import React from 'react';
import Colors from '../../Utils/Constants/Colors';
import { View, TouchableOpacity} from 'react-native';
import { Icon, Text, Image } from 'react-native-elements';
import styles from './ControlCameraStyles'
import PropTypes from 'prop-types';


const ControlCamera = ({ image, toggleCameraOptions}) => {

    let imageInfo = null;
    if (image) {

        imageInfo = (
            <Image
                source={{ uri: image }}
                style={styles.imageUser} />
        );
    } else {
        imageInfo = (
            <Icon
                name='camera'
                type='font-awesome'
                color={Colors.cameraIconColor}
            />
        );
    }

    return (
        <>
            <TouchableOpacity style={styles.viewCamera} onPress={toggleCameraOptions}>
                <View style={styles.cameraButton}>
                    {imageInfo}
                </View>
                <Text style={styles.textChangeCamera}>Alterar Foto</Text>
            </TouchableOpacity>
        </>
    );
};

ControlCamera.propTypes = {
    image: PropTypes.string,
    toggleCameraOptions: PropTypes.func.isRequired
};

export default ControlCamera;