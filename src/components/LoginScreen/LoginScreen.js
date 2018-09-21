import React, {Component} from 'react';
import { Container, Form, Item, Header, Label, Content, Input, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class LoginScreen extends Component {
    render() {
        return (
            <Container>
                {/*<Header />*/}
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Логин</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Пароль</Label>
                            <Input />
                        </Item>
                        <Button block bordered>
                            <Text>Войти</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}


