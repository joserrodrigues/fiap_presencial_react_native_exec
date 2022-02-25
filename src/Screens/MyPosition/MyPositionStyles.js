import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Constants/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    itemsInfo: {
        flexDirection: 'column',
        margin: 30,
        marginLeft: 80,
        marginRight: 80,
    },
    textInfo: {
        flexDirection: 'row',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    infoText: {
        fontSize: 18,
    },
    sliderStrack:{
      height: 5,
       backgroundColor: 'red'
    },
    sliderThumb: {
        height: 20, 
        width: 20, 
        backgroundColor: Colors.Red 
    },
    containerMap:{
        flex: 1,
        backgroundColor: 'gray',
    }
});