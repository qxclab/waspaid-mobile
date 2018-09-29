import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button, Divider, Image, Text, View} from "@shoutem/ui";
import InputForm from '../InputForm'

const SignupForm = props => {
    const { handleSubmit, pristine, signup, submitting } = props
    return (
        <View>
            <View style={{flex: 1, alignItems:'center'}}>
                <Image
                    styleName="medium-avatar"
                    source={{ uri: 'https://avatars3.githubusercontent.com/u/43476558?s=200&v=4'}}
                />
            </View>
            <Divider/>
            <View style={{paddingLeft: '10%', paddingRight: '10%'}}>
                <Field
                    name="email"
                    component={InputForm}
                    type="text"
                    placeholder="Email"
                />
                <Divider />
                <Field
                    name="password"
                    component={InputForm}
                    type="password"
                    placeholder="Password"
                />
                <Divider/>
                <Field
                    name="repassword"
                    component={InputForm}
                    type="password"
                    placeholder="Password"
                />
                <Divider />
                <Button
                    styleName="secondary"
                    type="submit"
                    onPress={handleSubmit ((values)=>signup(values))}
                    disabled={pristine || submitting}
                >
                    <Text>Sign up</Text>
                </Button>
                <Divider />
            </View>
        </View>

    )
};

export default reduxForm({
    form: 'Signup',
    validate: (values) => {
        const errors = {};
        errors.email = !values.email
            ? 'Email field is required'
            : !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(values.email)
                ? 'Email format is invalid'
                : undefined;

        errors.password = !values.password
            ? 'Password field is required'
            : values.password.length < 8
                ? 'Password must be at least 8 characters long'
                : undefined;
        errors.repassword = values.password !== values.repassword
            ? 'Password don`t match'
            : undefined;
        return errors;
    }})(SignupForm)
