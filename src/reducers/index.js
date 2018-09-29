import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth';
import utils from './utils'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth','form'],
};

export default persistReducer(persistConfig, combineReducers({
    auth,
    utils,
    form,
}));
