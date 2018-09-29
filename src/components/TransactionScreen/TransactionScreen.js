import React, {Component} from 'react';
import { PieChart } from "react-native-svg-charts";
import {
    Icon,
    Button,
    Divider,
    Image,
    NavigationBar,
    Row,
    Screen,
    ScrollView,
    Text,
    TextInput,
    Title,
    View, Subtitle
} from "@shoutem/ui";
import {Actions} from "react-native-router-flux";

export default class TransactionScreen extends Component {

    render() {
        return (
            <Screen>
                <NavigationBar
                    centerComponent={
                        <Title>Сводка</Title>
                    }
                />
                <ScrollView key={'Dashboard'}>
                    <Divider style={{paddingTop: 85}}/>
                    <Row styleName="small">
                        {/*<Icon name="share" />*/}
                        <View styleName="vertical">
                            <Subtitle>Вы должны вернуть долг Александру</Subtitle>
                            <Text
                                numberOfLines={1}
                                style={{color: 'red'}}
                            >
                                - 5000 руб
                            </Text>
                        </View>
                    </Row>
                    {/*<Divider/>*/}
                    <Row styleName="small">
                        <View styleName="vertical">
                            <Subtitle>Вам должен вернуть долг Александр [Без опозданий] </Subtitle>
                            <Text
                                numberOfLines={1}
                                style={{color: 'green'}}
                            >
                                + 5000 руб
                            </Text>
                        </View>
                        <Icon styleName="disclosure" name="right-arrow" />
                    </Row>
                    <Row styleName="small">
                        <View styleName="vertical">
                            <Subtitle>Вам должен вернуть долг Александр [С опозданием] </Subtitle>
                            <Text
                                numberOfLines={1}
                                style={{color: 'green'}}
                            >
                                + 5250 руб (5000 + 250)

                            </Text>
                        </View>
                        {/*<Icon styleName="disclosure" name="right-arrow" />*/}
                    </Row>
                    <Divider/>
                    <Row styleName="small">
                        {/*<Icon name="share" />*/}
                        <View styleName="vertical">
                            <Subtitle>Покупка холодильника [Разовая]</Subtitle>
                            <Text
                                numberOfLines={1}
                                style={{color: 'red'}}
                            >
                                ~ 15000 руб
                            </Text>
                        </View>
                    </Row>
                    {/*<Divider/>*/}
                    <Row styleName="small">
                        {/*<Icon name="share" />*/}
                        <View styleName="vertical">
                            <Subtitle>Покупка Google Play Music [Ежемесячная]</Subtitle>
                            <Text
                                numberOfLines={1}
                                style={{color: 'red'}}
                            >
                                ~ 150 руб
                            </Text>
                        </View>
                    </Row>
                </ScrollView>
            </Screen>

        );
    }
}


