import React, {Component} from 'react';
import {Actions} from "react-native-router-flux";
import {
    Divider,
    Button,
    Text,
    Image,
    NavigationBar,
    TextInput,
    Screen,
    ScrollView,
    Title,
    View
} from "@shoutem/ui";
import { connect } from "react-redux";
import LoginForm from "../shared/forms/LoginForm";

class LoginScreen extends Component {
    render() {
        return (
            <Screen>
                <NavigationBar
                    centerComponent={
                        <Title>Авторизация</Title>
                    }
                />
                <ScrollView key={'LoginScreen'}>
                <Divider style={{paddingTop: 85}}/>
                    {/*<LoginForm/>*/}
                    <Button onPress={Actions.signup}>
                        <Text>Зарегистрироваться</Text>
                    </Button>
                </ScrollView>
            </Screen>
        );
    }
}

export default connect(null,null)(LoginScreen)
