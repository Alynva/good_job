import React from "react";
import DefaultScreen from "./DefaultScreen";
import { StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { GiftedChat } from 'react-native-gifted-chat'

class ChatPageScreen extends React.Component {
    state = {
        messages: [],
    }

    componentWillMount() {
        let {company, job} = this.props.navigation.state.params
        if(company == "Monitora" && job == "Front-End Developer"){
            this.setState({
                messages: [
                    {
                        _id: 1,
                        text: 'Olá Alisson! Fico feliz em poder te ajudar! Aqui nós usamos bastante React e ReactNative. Aproveite para participar dos nossos workshops de React no Monitora Summer!',
                        createdAt: new Date("01/03/2019 05:02"),
                        user: {
                            _id: 2,
                            name: 'Monitora',
                        },
                    },
                    {
                        _id: 2,
                        text: 'Olá, Monitora! Gostaria de saber as tecnologias que vocês mais usam no desenvolvimento front-end :D',
                        createdAt: new Date("01/03/2019 05:01"),
                        user: {
                            _id: 1,
                            name: 'Monitora',
                        },
                    },
                ],
            })
        }
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }
    
    componentDidUpdate() {
        if (!this.props.screenProps.user) {
            this.props.navigation.navigate("LoginPage")
        }
    }

    render() {
        container = (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
                placeholder="Escreva uma mensagem..."
            />
        )
        let {company, job} = this.props.navigation.state.params
        return (
            <DefaultScreen
                title={company + " - " + job}
                container={container}
                {...this.props} />
        )
    }
}

const styles = StyleSheet.create({
    
})

export default withNavigation(ChatPageScreen)