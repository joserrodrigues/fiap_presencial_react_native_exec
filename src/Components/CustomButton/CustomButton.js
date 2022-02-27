import React from 'react';
import { Button} from 'react-native-elements';
import Colors from '../../Utils/Constants/Colors';
import PropTypes from 'prop-types';

const CustomButton = ({ onPress, title, isMainButton }) => {

    let color = Colors.Red;
    if (!isMainButton){
        color = Colors.Pink;
    }

    return (
        <Button
            title={title}
            onPress={onPress}
            containerStyle={{
                backgroundColor: '#ff0000',
                marginHorizontal: 50,
                marginVertical: 10,
            }}
        />
    );
};

CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
    isMainButton: PropTypes.bool.isRequired,
    onPress: PropTypes.func
};

export default CustomButton;