import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Constants/Colors';

export default StyleSheet.create({
    bottomSheetItem: {
        margin: 15,
    },
    bottomSheetItemView: {
        fontSize: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomSheetItemIcon: {
        marginRight: 10,
    },
    bottomSheetCancelItem: {
        margin: 15,
        fontSize: 15,
    },
    bottomSheetCancelItemText: {
        color: Colors.Red
    },
});
