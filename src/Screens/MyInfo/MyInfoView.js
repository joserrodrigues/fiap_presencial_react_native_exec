import React, { useRef } from 'react';
import { SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import { View } from 'react-native';
import { FAB} from 'react-native-elements';
import Colors from '../../Utils/Constants/Colors';
import styles from './MyInfoStyles';
import DrawerMenu from '../../Components/DrawerMenu/DrawerMenu';
import ControlCamera from '../../Components/ControlCamera/ControlCamera';
import CustomBottomMenu from '../../Components/CustomBottomMenu/CustomBottomMenu';
import CommonForm from '../../Components/CommonForm/CommonForm';

const MyInfoView = ({ navigation, pickImage, image, showPhotoOptions, toggleCameraOptions, signInSchema, onSubmit }) => {

    const commonForm = useRef(null);
    
    let bottomMenuItems = [
        {
            title: "Biblioteca",
            icon: "camera",
            return: 1,
        },
        {
            title: "Câmera",
            icon: "photo",
            return: 2,
        },
    ];

    let formListInfo = [
        {
            name: "name",
            label: "Nome",
            placeholder: "Nome",
            icon: "user",
            secure: false,
        },
        {
            name: "email",
            label: "E-mail",
            placeholder: "E-mail",
            icon: "envelope",
            secure: false,
        },
        {
            name: "password",
            label: "Senha",
            placeholder: "Senha",
            icon: "lock",
            secure: true,
        },
        {
            name: "confirmPassword",
            label: "Confirmar Senha",
            placeholder: "Confirmar Senha",
            icon: "lock",
            secure: true,
        },
    ];

    let behavior = "";
    if (Platform.OS === "ios") {
        behavior = "padding";
    }


    return (
        <SafeAreaView style={styles.mainContainer}>
            <DrawerMenu navigation={navigation} />
            <KeyboardAvoidingView
                    behavior={behavior}
                    style={styles.container}
                > 
                <ScrollView >                   
                    <View style={styles.container}>
                        <ControlCamera 
                            image={image} 
                            toggleCameraOptions={toggleCameraOptions} />
                        <View style={styles.viewInfo}>
                            <CommonForm 
                                ref={(e) => commonForm.current = e}
                                listInfo={formListInfo}
                                signInSchema={signInSchema}
                                onSubmit={onSubmit}
                            />
                        </View>
                        <CustomBottomMenu 
                            pickImage={pickImage}
                            showPhotoOptions={showPhotoOptions}
                            toggleCameraOptions={toggleCameraOptions}
                            listItems={bottomMenuItems} />
                    </View>      
                </ScrollView>
            </KeyboardAvoidingView>              
            <View style={styles.fabStyle}>
                <FAB
                    loading={false}
                    icon={{ name: 'check', color: Colors.White }}
                    color={Colors.Red}
                    onPress={() => commonForm.current.submitForm()}
                />
            </View>
        </SafeAreaView>
    );
};

export default MyInfoView;