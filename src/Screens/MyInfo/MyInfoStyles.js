import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Constants/Colors';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
    },

    viewInfo:{
        flex: 2,
    },

    
    spaceBottom: {
        marginBottom: 60
    },
    fabStyle: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        bottom: 30,
        right: 30,
    },
    msgError: {
        color: Colors.Red,
        marginLeft: 15,
        marginTop: -15,
        marginBottom: 15,
        
    }

});
