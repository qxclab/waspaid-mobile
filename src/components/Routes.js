import {Router,Scene,Stack} from "react-native-router-flux";
import React from "react";
import LoginScreen from "./LoginScreen/LoginScreen";
import SignupScreen from "./SignupScreen/SignupScreen";
import DashboardScreen from "./DashboardScreen/DashboardScreen";
import AuthScreen from "./AuthScreen/AuthScreen";

export const Routes = () => (
    <Router>
        <Stack key="root">
            <Scene key="auth" component={AuthScreen} hideNavBar={true}/>
            <Scene key="login" component={LoginScreen} hideNavBar={true}/>
            <Scene key="signup" component={SignupScreen} hideNavBar={true}/>
            <Scene key="dashboard" component={DashboardScreen} hideNavBar={true}/>
        </Stack>
    </Router>
)
