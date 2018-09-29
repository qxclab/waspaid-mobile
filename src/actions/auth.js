import {Actions} from 'react-native-router-flux';
import {BACKEND, BACKPATH, HEADERS} from '../utils/constants';
import RestClient from '../services/RestClient'
import {Alert} from "react-native";
import * as actions from './types'
import { startLoader, finishedLoader } from './utils'
import jwt_decode from 'jwt-decode'

export const logout = () =>
    dispatch => {

    };
export const checkToken = () =>
    async (dispatch, getState) => {
        try{
            dispatch(startLoader())
            const token = getState().auth.auth.split(' ')[1]
            const decoded = jwt_decode(token)
            if (decoded.exp*1000>(+ new Date())){
                Actions.accounts();
            }else{
                dispatch(saveUserData())
                dispatch(saveAuthData())
            }
            dispatch(finishedLoader())
        }catch(e){
            console.log(e)
            dispatch(saveUserData())
            dispatch(saveAuthData())
            dispatch(finishedLoader())
        }
    };

export const login = (values) =>
    async (dispatch, getState) => {
        try{
            dispatch(startLoader())
            const response = await RestClient.post(BACKPATH.login,{
                user:{
                    email: values.email.toLowerCase(),
                    password: values.password
                }
            })
            dispatch(saveAuthData(response.headers['authorization']))
            dispatch(saveUserData(values.email.toLowerCase()))
            RestClient.addAuthToken(response.headers['authorization'])
            Actions.dashboard();
            dispatch(finishedLoader())

        }catch (e) {
            dispatch(finishedLoader())
            Alert.alert(e.response.data.error)
            console.log({e});
        }

    };

export const signup = (values) =>
    async (dispatch, getState) => {
        dispatch(startLoader())
        try{
            const response = await RestClient.post(BACKPATH.signup,{
                user:{
                    email: values.email.toLowerCase(),
                    password: values.password
                }
            })
            await dispatch(login(values))
            dispatch(finishedLoader())
        }catch(e){
            dispatch(finishedLoader())
            Alert.alert(e.response.data.errors[0].detail.email[0])
            console.log({e});
        }

    };

const saveAuthData = (auth) => {
    return {
        type: actions.AUTH_SAVE_DATA,
        payload: auth,
    };
};

export const saveUserData = (user) => {
    return {
        type: actions.SAVE_USER_DATA,
        payload: user,
    };
};

