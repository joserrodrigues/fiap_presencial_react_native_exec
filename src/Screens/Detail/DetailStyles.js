import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Constants/Colors';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
    },

    imageItem: {
        width: '100%',
        height: 190,
    },
    textName: {
        margin: 10,
        fontSize: 25
    },
    title: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.titleTextColor
    },
    textDetail: {
        margin: 10,
        fontSize: 13
    },
    noInfo: {
        marginTop: 150,
        fontSize: 30,
        color: Colors.titleTextColor,
        textAlign: 'center',
    }
});