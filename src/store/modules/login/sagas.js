/**
 * Objeto que reúne as sagas deste módulo
 */
//Importa os effects do Redux-Saga 
import { takeLatest, call, put, all } from 'redux-saga/effects';
import qs from 'qs';
import API from '../../../Services/APIs/Common/api';

// Importa as funções Actions que serão chamadas pelo Saga
import {
    loginStart,
    loginFail,
    loginFinish
} from './actions';

function* login({ payload }) {
    try {
        const { email, password } = payload;

        console.log(payload);
        yield put(loginStart());
    
        const data = qs.stringify({
            email: email,
            password: password
        });

        const dataReturn = yield call(API.post, 'storeProducts/login', data);
        
        console.log(dataReturn.status);
        console.log(dataReturn.data);

        if (dataReturn.status === 201){
            yield put(loginFail(-1, "Usuário ou login inválido"));
        } else if (dataReturn.status === 200){
            yield put(loginFinish(dataReturn.data));
        } else {
            yield put(loginFail(-98, "Erro desconhecido - Erro: " + dataReturn.status));    
        }        
    } catch (err) {
        console.log(err);
        yield put(loginFail(-99, "Erro ao realizar a conexão"));
    }
}

export default all([
    takeLatest('login/Login', login),
]);
