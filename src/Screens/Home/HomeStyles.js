import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Constants/Colors';

export default StyleSheet.create({
    safeAreaView: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
    },
    loadingBox: {
        marginTop: 30,
    },

    containerItem: {
        marginBottom: 10,
    },

    textsView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        marginBottom: 2,
    },
    textNameStyle: {
        flexDirection: "row",
        justifyContent: 'flex-start',
    },

    textTitle: {
        fontSize: 18,
    },

    textDetail: {
        fontSize: 12,
    },
    imageItem: {
        width: 50,
        height: 50,
        margin: 10,
    },
    separator: {
        flex: 1,
        height: 2,
        backgroundColor: Colors.separatorColor,
        marginLeft: 10,
        marginRight: 10
    },
    searchBarContainer:{
        backgroundColor: Colors.White,
        marginBottom: 10
    },
    searchBarInputContainer: {
        backgroundColor: Colors.LightGrey,
        borderRadius: 20,
        
    }
});