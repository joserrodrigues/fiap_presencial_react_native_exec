import React from 'react';
import { View, Text, ImageBackground, ActivityIndicator } from 'react-native';
import styles from './LoadingUpdateStyle';
import Colors from '../../Utils/Constants/Colors';

const LoadingUpdateView = () => {

    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                source={{ uri: "https://previews.123rf.com/images/chagin/chagin1501/chagin150100001/35151812-business-people-working-together.jpg" }}
                resizeMode="cover" style={styles.image}>
                <View style={styles.frontImageBackground}>
                    <View style={styles.loginBox}>
                        <Text style={styles.textInfo}>Loading Update</Text>
                        <ActivityIndicator color={Colors.Red} style={styles.activityIndicatorInfo}/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default LoadingUpdateView;