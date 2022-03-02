import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Constants/Colors';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    frontImageBackground: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 30,
        backgroundColor: 'rgba(0,0,0,0.6)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
   
    loginBox: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        margin: 35,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'red',
        padding: 20,
        width: '80%'
    },
    textInfo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        margin: 5,
        marginTop: 30,
        marginBottom: 30,
    },    
    activityIndicatorInfo:{
        marginBottom: 20
    }
});