import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    viewCamera: {
        flexDirection: 'column',
        flex: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageUser: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    cameraButton: {
        justifyContent: 'center',
        borderRadius: 50,
        width: 100,
        height: 100,
        backgroundColor: Colors.backgroundCameraIcon
    },
    textChangeCamera: {
        marginTop: 10,
        fontSize: 12,
    },

});
