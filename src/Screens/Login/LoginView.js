import React, { useRef } from 'react';
import { View, Text, ImageBackground, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './LoginStyles';
import Colors from '../../Utils/Constants/Colors';
import CommonForm from '../../Components/CommonForm/CommonForm';

const LoginView = ({ signInSchema, isLoading, messageConnection, submitForm }) => {

    const commonForm = useRef(null);
    let buttonBox = null;
    let messageError = null;
    console.log(isLoading);
    if(isLoading){
        buttonBox = (
            <ActivityIndicator 
                color={Colors.Red}
                />
        )
    } else {
        buttonBox = (
            <Button
                title="Login"
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.buttonContainerStyle}
                onPress={() => { commonForm.current.submitForm();}}
            />
        );
        if(messageConnection !== ""){
            messageError = (
                <View style={styles.messageErrorBox}>
                    <Text style={styles.messageError}>{messageConnection}</Text>
                </View>                
            );
        }
    }

    let formListInfo = [
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
        }
    ];

    let behavior = "";
    if (Platform.OS === "ios") {
        behavior = "padding";
    }

    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                source={{ uri: "https://previews.123rf.com/images/chagin/chagin1501/chagin150100001/35151812-business-people-working-together.jpg" }}
                resizeMode="cover" style={styles.image}>
                <View style={styles.frontImageBackground}>
                    <KeyboardAvoidingView
                        behavior={behavior}
                        style={styles.container}
                    > 
                        <View style={styles.topScreen}>                        
                            <Text style={styles.logoDiv}>RH App</Text>
                        </View>
                        <View style={styles.bottomScreen}>
                            <View style={styles.loginBox}>
                                <CommonForm
                                    ref={(e) => commonForm.current = e}
                                    listInfo={formListInfo}
                                    signInSchema={signInSchema}
                                    onSubmit={submitForm}
                                />                            
                                <View style={styles.bottomButton}>
                                    {buttonBox}
                                </View>
                                {messageError}
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>                
            </ImageBackground>
        </View>
    );
};

export default LoginView;