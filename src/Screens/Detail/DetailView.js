import React from 'react';
import { View, ScrollView } from 'react-native';
import { Image, Text } from 'react-native-elements';
import styles from './DetailStyles';
import PropTypes from 'prop-types';


const DetailView = ({ navigation, objectItem }) => {

    if (!objectItem) {
        return (
            <>
                <Text style={styles.noInfo}>
                    Sem informações
                </Text>
            </>
        );
    }
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <Image
                    source={{ uri: objectItem.image }}
                    containerStyle={styles.imageItem}
                />
                <Text style={styles.textName}>
                    {objectItem.firstName} {objectItem.lastName}
                </Text>
                <Text style={styles.title}>
                    Ocupação
                </Text>
                <Text style={styles.textDetail}>
                    {objectItem.jobTitle}
                </Text>
                <Text style={styles.title}>
                    Tipo
                </Text>
                <Text style={styles.textDetail}>
                    {objectItem.jobType} / {objectItem.jobArea}
                </Text>
                <Text style={styles.title}>
                    Endereço
                </Text>
                <Text style={styles.textDetail}>
                    {objectItem.address}
                </Text>
                <Text style={styles.textDetail}>
                    {objectItem.zipCode}
                </Text>
                <Text style={styles.textDetail}>
                    {objectItem.city} / {objectItem.state} / {objectItem.coutry}
                </Text>
                <Text style={styles.title}>
                    Telefone
                </Text>
                <Text style={styles.textDetail}>
                    {objectItem.phone}
                </Text>
            </ScrollView>
        </View>
    );
};

DetailView.propTypes = {
    objectItem: PropTypes.PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        jobType: PropTypes.string.isRequired,
        jobArea: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        zipCode: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        coutry: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }),
};


export default DetailView;