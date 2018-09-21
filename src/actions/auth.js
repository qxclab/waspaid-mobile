import {Actions} from 'react-native-router-flux';
import {BACKEND, HEADERS} from '../utils/constants';


export const logout = () =>
    dispatch => {
        Actions.auth();
    };

export const login = () =>
    dispatch => {
        Actions.auth();
    };
