import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button, Divider, Image, Text, TextInput, View} from "@shoutem/ui";
import {Actions} from "react-native-router-flux";
import InputForm from '../InputForm'

const LoginForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            {/*<View style={{flex: 1, alignItems:'center'}}>*/}
                {/*<Image*/}
                    {/*styleName="medium-avatar"*/}
                    {/*source={{ uri: 'https://avatars3.githubusercontent.com/u/43476558?s=200&v=4'}}*/}
                {/*/>*/}
            {/*</View>*/}
            <Divider/>
            <View style={{paddingLeft: '10%', paddingRight: '10%'}}>
                {/*<Field*/}
                    {/*name="login"*/}
                    {/*component={InputForm}*/}
                    {/*type="text"*/}
                    {/*placeholder="Email"*/}
                {/*/>*/}
                {/*<TextInput*/}
                    {/*placeholder={'Электронный адрес'}*/}
                {/*/>*/}
                <Divider />
                <TextInput
                    placeholder={'Пароль'}
                    secureTextEntry
                />
                <Divider />
                <Button
                    styleName="secondary"
                    onPress={Actions.dashboard}
                    type="submit"
                    disabled={pristine || submitting}
                >
                    <Text>Войти</Text>
                </Button>
                <Divider />
            </View>
        </form>
    )
};

export default reduxForm({
    form: 'loginForm'
})(LoginForm)
