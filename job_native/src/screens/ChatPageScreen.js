import React from "react";
import DefaultScreen from "./DefaultScreen";
import { StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { GiftedChat } from 'react-native-gifted-chat'

class ChatPageScreen extends React.Component {
    state = {
        messages: [],
    }

    /*
    componentWillMount() {
        this.setState({
            messages: [{
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    // avatar: 'https://placeimg.com/140/140/any',
                },
            },],
        })
    }
    */

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
        console.log(this.props.navigation)
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