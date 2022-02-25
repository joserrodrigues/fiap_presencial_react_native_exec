import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Slider } from 'react-native-elements';
import Colors from '../../Utils/Constants/Colors';
import styles from './MyPositionStyles'
import DrawerMenu from '../../Components/DrawerMenu/DrawerMenu';
import MapView, { Marker, Circle } from 'react-native-maps';

const MyPositionView = ({ navigation, position, statusPosition, radius, regionDelta, onChangeRadius }) => {

    let infoBox = null;

    //Organiza o texto se está buscando
    if (statusPosition === 1) {
        infoBox = (
            <ActivityIndicator size="large" color={Colors.Red} style={styles.activityStyle} />
        )
    } else if (statusPosition === 2) {
        let info = "";
        if (position) {
            info = "Latitude = " + position.coords.latitude + " - Longitude = " + position.coords.longitude +
                " - accuracy = " + position.coords.accuracy;
        }
        infoBox = (
            <>
                <View style={styles.itemsInfo}>
                    <View style={styles.textInfo}>
                        <Text style={styles.titleText}>Distância: </Text>
                        <Text style={styles.infoText}>{radius} mts.</Text>
                    </View>                    
                    <Slider
                        value={radius}
                        onValueChange={onChangeRadius}
                        maximumValue={5000}
                        minimumValue={100}
                        step={100}
                        allowTouchTrack
                        trackStyle={styles.sliderStrack}
                        thumbStyle={styles.sliderThumb}
                    /> 
                </View>
                <View style={styles.containerMap}>
                    <MapView style={{ flex: 1 }}
                        region={{
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            latitudeDelta: regionDelta,
                            longitudeDelta: regionDelta,
                        }}
                        mapType={'satellite'}
                    >
                        <Circle
                            center={{ latitude: position.coords.latitude, longitude: position.coords.longitude }}
                            radius={radius}
                            fillColor={Colors.RedTransparent} 
                            strokeColor={Colors.Red}/>
                        <Marker
                            draggable
                            coordinate={{ latitude: position.coords.latitude, longitude: position.coords.longitude }}
                            title={'Posição Atual'}
                            description={'Descrição da Posição'}
                            onDragEnd={(e) => updatePosition(e.nativeEvent.coordinate)}
                        />
                    </MapView>
                </View>
            </>
        )
    } else {
        infoBox = (
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 25, color: 'red' }}>{info}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <DrawerMenu navigation={navigation} />
            {infoBox}
        </View>
    );
};

export default MyPositionView;