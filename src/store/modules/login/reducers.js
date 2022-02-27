/**
 * Objeto que organiza o reducer do módulo busInfo
 */

//Importa a função produce do immer
import produce from 'immer';
import { useSetStorageItem } from '../../../Services/Storage/StorageServices';

//Seta o state inicial
const INITIAL_STATE = {
    isLoading: true,
    statusConnection: -1,
    messageConnection: "",
    userInfo: null
};

//Cria a função responsável por organizar o Reducer
export default function getInfo(state = INITIAL_STATE, { type, payload }) {

    //A função de uma maneira mais fácil o state com o draft
    // e retorna um novo state para o reducer
    return produce(state, (draft) => {
        switch (type) {

            case 'login/LoginStart': {      
                draft.isLoading = true;
                draft.statusConnection = 1;
                draft.messageConnection = "";
                break;
            }
            case 'login/LoginFail': {                
                draft.isLoading = false;
                draft.statusConnection = payload.status;
                draft.messageConnection = payload.message;
                break;
            }
            case 'login/LoginFinish': {
                draft.isLoading = false;
                draft.statusConnection = 0;                
                draft.userInfo = payload.info;
                draft.messageConnection = "";
                useSetStorageItem("userInfo",payload.info);         
                break;
            }
            case 'login/Logout': {
                draft.userInfo = null;  
                useSetStorageItem("userInfo", null);                 
                break;
            }
            case 'login/ChangeName': {
                draft.userInfo.name = payload.name;
                break;
            }
            case 'login/StopLoadUserInfo': {
                draft.isLoading = false;
                draft.statusConnection = 0;
                draft.userInfo = payload.info;
                break;
            }
            default:
        }
    });
}
