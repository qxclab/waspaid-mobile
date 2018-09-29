import React from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import reducer from '../reducers';
import {Routes} from "./Routes";
import logger from 'redux-logger'
// import OneSignalService from "./OneSignalService";
// import HockeyAppService from "./HockeyAppService";

const store = createStore(
    reducer,
    undefined,
    compose(applyMiddleware(thunk,logger)),
);

const persistor = persistStore(store);

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Routes/>
            {/*<OneSignalService/>*/}
            {/*<HockeyAppService/>*/}
        </PersistGate>
    </Provider>
);

export default App;
