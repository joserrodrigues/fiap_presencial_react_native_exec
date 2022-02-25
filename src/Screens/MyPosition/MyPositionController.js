
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import MyPositionView from './MyPositionView';

const MyPositionController = ({ navigation }) => {

    //Criando os states para buscar a informação
    const [position, setPosition] = useState(null);
    const [statusPosition, setStatusPosition] = useState(1);
    const [radius, setRadius] = useState(100);
    const [regionDelta, setRegionDelta] = useState(0.0022);

    useEffect(() => {
        startGetGeoLocation();
    }, [])


    const startGetGeoLocation = () => {
        setStatusPosition(1);
        setTimeout(async () => {
            //Verifica se o usuário já deu a permissão e, caso não tenha, solicita a permissão
            let { status } = await Location.requestForegroundPermissionsAsync();
            //Retorna o erro
            if (status !== 'granted') {
                setStatusPosition(-1);
                return;
            }

            currentPosition = await Location.getCurrentPositionAsync({});
            //Com o permissão em ordem, busca a posição do usuário assincronamente
            setPosition(currentPosition);
            setStatusPosition(2);
        }, 1000);
    }

    const onChangeRadius = (newRadius) => {
        let delta = (newRadius / 100) * 0.0970 / 50;
        console.log(" Delta = " + delta + " - New Radius = " + newRadius);
        setRadius(newRadius);
        setRegionDelta(delta)
    }


    //Mostra o status/resultado na tela 
    return (
        <MyPositionView
            navigation={navigation}
            position={position}
            radius={radius}
            regionDelta={regionDelta}
            statusPosition={statusPosition}
            onChangeRadius={onChangeRadius}
        />
    );
};

export default MyPositionController;