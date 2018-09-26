import React, {Component} from 'react';
import {
    Overlay,
    Title,
    Subtitle,
    Heading,
    Button,
    Icon,
    Text,
    NavigationBar,
    ScrollView,
    Divider,
    View, Image, TextInput, Screen
} from "@shoutem/ui";
import {Actions} from "react-native-router-flux";

export default class SignupScreen extends Component {
    render() {
        return (
            <Screen>
                <NavigationBar
                    centerComponent={
                        <Title>Регистрация</Title>
                    }
                />
                <ScrollView key={'RegisterScreen'}>
                    <Divider style={{paddingTop: 85}}/>
                    <View style={{flex: 1, alignItems:'center'}}>
                        <Image
                            styleName="medium-avatar"
                            source={{ uri: 'https://avatars3.githubusercontent.com/u/43476558?s=200&v=4'}}
                        />
                    </View>
                    <Divider/>
                    <View style={{paddingLeft: '10%', paddingRight: '10%'}}>
                        <TextInput
                            placeholder={'Электронный адрес'}
                        />
                        <Divider />
                        <TextInput
                            placeholder={'Пароль'}
                            secureTextEntry
                        />
                        <Divider />
                        <TextInput
                            placeholder={'Повторите пароль'}
                            secureTextEntry
                        />
                        <Divider />
                        <Button styleName="secondary" onPress={Actions.login}>
                            <Text>Зарегистрироваться</Text>
                        </Button>
                        <Divider />
                        <Button onPress={Actions.login}>
                            <Text>Уже есть аккаунт</Text>
                        </Button>
                    </View>
                </ScrollView>
            </Screen>
        );
    }
}


