import {Router,Scene,Stack} from "react-native-router-flux";
import React from "react";
import LoginScreen from "./LoginScreen/LoginScreen";
import SignupScreen from "./SignupScreen/SignupScreen";
import DashboardScreen from "./DashboardScreen/DashboardScreen";
import TransactionScreen from "./TransactionScreen/TransactionScreen";


export const Routes = () => (
    <Router>
        <Stack key="root">
            <Scene key="login" component={LoginScreen} hideNavBar={true}/>
            <Scene key="signup" component={SignupScreen} hideNavBar={true}/>
            <Scene key="dashboard" component={DashboardScreen} hideNavBar={true}/>
            {/*<Scene key="transaction" component={TransactionScreen} hideNavBar={true}/>*/}
        </Stack>
    </Router>
)
