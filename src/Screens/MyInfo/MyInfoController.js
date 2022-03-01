import React, { useState, useEffect} from 'react';
import MyInfoView from './MyInfoView';
import * as ImagePicker from 'expo-image-picker';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { changeName } from '../../store/modules/login/actions';
import { translate } from '../../Locales/ManageLocales';

const MyInfoController = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [showPhotoOptions, setShowPhotoOptions] = useState(false);
    const dispatch = useDispatch();

    //State que roda ao montar o componente
    const checkPermissions = async () => {

        //Checa Permissão para acessar a biblioteca de fotos
        let infoLibrary = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (infoLibrary.status !== 'granted') {
            alert(translate('alertPermissionGallery'));
            return false;
        }

        //Checa Permissão para acessar a Câmera
        let infoCamera = await ImagePicker.requestCameraPermissionsAsync();
        if (infoCamera.status !== 'granted') {
            alert(translate('alertPermissionCamera'));
            return false;
        }

        return true;
    }

    //Função para controlar a busca da image,
    const pickImage = async (type) => {

        let resultPermission = await checkPermissions();
        if(!resultPermission){
            return;
        }
        //Determina os parametros da imagem como tipo de imagem permitido, 
        //se permite editar a image, o formato da imagem e a qualidade
        let objectParams = {
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        }

        let result = null;
        if (type === 1) {
            //Busca as imagens da galeria
            result = await ImagePicker.launchImageLibraryAsync(objectParams);
        } else {
            //Busca a imagem da camera
            result = await ImagePicker.launchCameraAsync(objectParams);
        }
        if (!result.cancelled) {
            setImage(result.uri);
        }

        setShowPhotoOptions(false);
    };

    const toggleCameraOptions = () => {
        console.log(showPhotoOptions);
        setShowPhotoOptions(!showPhotoOptions);
    }

    const signInSchema = Yup.object().shape({
        name: Yup.string().required(translate('requiredName')),
        email: Yup.string().email(translate('invalidEmail')).required(translate('requiredEmail')),

        password: Yup.string()
            .required(translate('requiredPassword'))
            .min(4, translate('shortPassword')),
        confirmPassword: Yup.string()
            .required(translate('requiredConfirmPassword'))
            .oneOf([Yup.ref('password'), null], translate('passwordMustMatch'))                       
    });    

    const onSubmit = (values) => {
        console.log(values);
        dispatch(changeName(values.name))
    }
    return (
        <MyInfoView 
            navigation={navigation} 
            image={image}
            showPhotoOptions={showPhotoOptions}
            signInSchema={signInSchema}
            onSubmit={onSubmit}
            pickImage={pickImage}
            toggleCameraOptions={toggleCameraOptions}
         />
    );
};

export default MyInfoController;