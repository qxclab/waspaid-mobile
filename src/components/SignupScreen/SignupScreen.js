import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Form, Item, Label, Input
} from 'native-base';

export default class SignupScreen extends Component {
    render() {
        return (
            <Container>
                {/*<Header />*/}
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Почтовый адрес</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Пароль</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Повторите пароль</Label>
                            <Input />
                        </Item>
                        <Button block bordered>
                            <Text>Регистрация</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}


