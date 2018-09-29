import {Router,Scene,Stack} from "react-native-router-flux";
import React from "react";
import LoginScreen from "./LoginScreen/LoginScreen";
import SignupScreen from "./SignupScreen/SignupScreen";
import DashboardScreen from "./DashboardScreen/DashboardScreen";
import AccountsScreen from "./AccountsScreen/AccountsScreen";

export const Routes = () => (
    <Router>
        <Stack key="root">
            <Scene key="login" component={LoginScreen} hideNavBar={false} title="Sign In"/>
            <Scene key="signup" component={SignupScreen} hideNavBar={false} title="Sign Up"/>

            <Scene key="accounts" component={AccountsScreen} hideNavBar={false} title="Accounts"/>
            <Scene key="dashboard" component={DashboardScreen} hideNavBar={false}/>
            {/*<Scene key="transaction" component={TransactionScreen} hideNavBar={true}/>*/}
        </Stack>
    </Router>
)
