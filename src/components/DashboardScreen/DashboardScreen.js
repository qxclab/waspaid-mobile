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
    View, Subtitle, Caption
} from "@shoutem/ui";

const pieData = [
    {
        value: 5000,
        svg: {
            fill: '#ef0000'
        },
        key: 1
    },
    {
        value: 10000,
        svg: {
            fill: '#000000'
        },
        key: 2
    }
]

export default class DashboardScreen extends Component {

    render() {
        return (
            <Screen>
                <NavigationBar
                    centerComponent={
                        <Title>Сводка</Title>
                    }
                />
                <ScrollView key={'Dashboard'}>
                    <Divider/>
                    <Divider styleName="section-header">
                        <Caption>Бюджет/Расходы</Caption>
                    </Divider>
                    <PieChart
                        style={ { height: 200 } }
                        data={ pieData }
                    />
                    <Divider styleName="section-header">
                        <Caption>Предстоящие покупки</Caption>
                    </Divider>
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
                    <Divider styleName="section-header">
                        <Caption>Задолжности</Caption>
                    </Divider>
                    <Row styleName="small">
                        <View styleName="vertical">
                            <Subtitle>Егор [Осталось 2 дня]</Subtitle>
                            <Text
                                numberOfLines={1}
                                style={{color: 'green'}}
                            >
                                +5000 руб
                            </Text>
                        </View>
                    </Row>
                    <Row styleName="small">
                        <View styleName="vertical">
                            <Subtitle>Александр [Прошло 3 дня]</Subtitle>
                            <Text
                                numberOfLines={1}
                                style={{color: 'red'}}
                            >
                                - 15000 руб
                            </Text>
                        </View>
                    </Row>
                </ScrollView>
            </Screen>

        );
    }
}


