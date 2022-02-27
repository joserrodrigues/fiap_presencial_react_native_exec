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
    },

    topScreen:{
        flex: 3,
        alignContent: 'center',
        justifyContent: 'center'
    },
    bottomScreen:{
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    frontImageBackground: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 30,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    logoDiv:{
        margin: 20,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign:'center',
        color: 'red'
    },
    loginBox: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        margin: 35,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'red',
        padding: 20        
    },
    labelLogin:{
        fontSize: 15,
        marginLeft: 5,
        color: '#333'
    },    
    bottomButton:{
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    buttonStyle: {
        backgroundColor: 'red',
        borderRadius: 10,
    },
    buttonContainerStyle: {
        flex:1,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    messageError:{
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.Red
    }

});