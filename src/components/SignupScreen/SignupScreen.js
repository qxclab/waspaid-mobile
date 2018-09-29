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
    View, Image, TextInput, Screen, Spinner
} from "@shoutem/ui";
import {Actions} from "react-native-router-flux";
import SignupForm from "../shared/forms/SignupForm";
import {signup} from "../../actions/auth";
import connect from "react-redux/es/connect/connect";

class SignupScreen extends Component {
    render() {
        const {signup, loading} = this.props;
        return (
            <Screen>
                {/*<NavigationBar*/}
                    {/*centerComponent={*/}
                        {/*<Title>Signup</Title>*/}
                    {/*}*/}
                {/*/>*/}
                <ScrollView key={'RegisterScreen'}>
                    <Divider/>
                    { loading ?
                        <View>
                            <Spinner style={{size: 'large'}}/>
                        </View> :
                        <View>
                            <SignupForm signup={signup}/>
                            <View style={{paddingLeft: '10%', paddingRight: '10%'}}>
                                <Button onPress={Actions.login}>
                                    <Text>Already exist account?</Text>
                                </Button>
                            </View>
                        </View>}
                </ScrollView>
            </Screen>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signup: (values) => dispatch(signup(values))
});
const mapStateToProps = ({utils: {loading}}) =>({
    loading
})
export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)

