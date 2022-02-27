import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Constants/Colors';

export default StyleSheet.create({
    container:{
        
    },
    boxUserInfo:{
        height: 120,
        flexDirection: 'column',        
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: 30,
    },
    iconView:{
        width: 70,
        height: 70,
        backgroundColor: Colors.White,
        margin: 15,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText:{
        fontSize: 30,
        color: Colors.DarkGrey
    },
    welcomeText:{
        fontSize: 18,
        color: Colors.White
    }
});
