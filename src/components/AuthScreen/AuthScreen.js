import React, {Component} from 'react';
import { ScrollableTab, Tabs, Tab, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import LoginScreen from "../LoginScreen/LoginScreen";
import SignupScreen from "../SignupScreen/SignupScreen";
import DashboardScreen from "../DashboardScreen/DashboardScreen";

export default class AuthScreen extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs/>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
                    <Tab heading="Вход">
                        <LoginScreen />
                    </Tab>
                    <Tab heading="Регистрация">
                        <SignupScreen />
                    </Tab>
                    <Tab heading="Сводка">
                        <DashboardScreen />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}


