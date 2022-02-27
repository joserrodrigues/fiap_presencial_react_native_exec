import React from 'react';
import LoginView from './LoginView';
import {
    login,
} from '../../store/modules/login/actions';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";


const LoginController = () => {

    //Inicia o dispatch
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.loginSaga.isLoading);
    const messageConnection = useSelector((state) => state.loginSaga.messageConnection);

    const signInSchema = Yup.object().shape({
        email: Yup.string().email("E-mail não válido").required("E-mail é obrigatório"),

        password: Yup.string()
            .required("Senha é obrigatório")
            .min(4, "Senha é curta - deveria ter ao menos 4 caracteres"),
    });

    submitForm = (values) => {
        dispatch(login(values.email,values.password));
    }
    
    return (
        <LoginView
            signInSchema={signInSchema}
            isLoading={isLoading}
            messageConnection={messageConnection}
            submitForm={submitForm} />
    );
};

export default LoginController;