// Importa o combineReducers  do redux
import { combineReducers } from 'redux';

//importa o reducer que está no modulo testReduxSaga
import loginSaga from './login/reducers';

//Junta os reducers
export default combineReducers({ loginSaga });
