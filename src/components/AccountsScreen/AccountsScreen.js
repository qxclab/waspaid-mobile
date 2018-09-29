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
    View, Spinner
} from "@shoutem/ui";
import { connect } from "react-redux";
import {checkToken, login} from "../../actions/auth";

class AccountsScreen extends Component {
    render() {
        const {loading} = this.props;
        return (
            <Screen>
                {/*<NavigationBar*/}
                    {/*centerComponent={*/}
                        {/*<Title>Auth</Title>*/}
                    {/*}*/}
                {/*/>*/}
                <ScrollView key={'LoginScreen'}>
                    <Divider/>
                    { loading ?
                        <View>
                            <Spinner style={{size: 'large'}}/>
                        </View> :
                        <View>
                            <Text>Accounts</Text>
                        </View>}
                </ScrollView>
            </Screen>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    login: (values) => dispatch(login(values)),
    checkToken: () => dispatch(checkToken())
});

const mapStateToProps = ({utils: {loading}}) =>({
    loading
})

export default connect(mapStateToProps,mapDispatchToProps)(AccountsScreen)
