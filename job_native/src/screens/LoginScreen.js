import React from "react"
import DefaultScreen from "./DefaultScreen";
import { Button, Text, View, Container } from "native-base";
import { StyleSheet } from "react-native"

export default class LoginScreen extends React.Component {
    _handleLogin = () => {
        this.props.screenProps.login()
        let { redirectTo } = this.props.navigation.state.params || "LandingPage"
        this.props.navigation.navigate(redirectTo)
    }
    _handleSkip = () => {
        this.props.navigation.navigate(this.props.navigation.state.params.backTo || "LandingPage")
    }
    render() {
        let content = (
            <Container style={{...styles.login_container}}>
                <Text style={{...styles.login_text}}>Ao fazer login, você poderá ter acesso a novas funcionalidades, tais como entrar em contato direto com colaboradores das empresas, candidatar-se a vagas e muito mais!</Text>
                <Button
                    style={{ alignSelf: "center" }}
                    large onPress={this._handleLogin}
                ><Text>Fazer Login</Text></Button>
                <Button
                    style={{alignSelf: "center"}}
                    small
                    primary
                    transparent
                    onPress={this._handleSkip}
                >
                    <Text>talvez mais tarde</Text>
                </Button>

            </Container>
        )
        return (
            <DefaultScreen
                title="Fazer login"
                content={content}
                {...this.props}
            />
        )
    }
}

const styles = StyleSheet.create({
    maybeLater: {
        fontSize: 8
    },
    login_container: {
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
    },
    login_text: {
        marginBottom: 200,
    }
})