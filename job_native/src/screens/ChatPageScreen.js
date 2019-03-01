import React from "react";
import { View, Text, Button, List, Card, CardItem, Left, Right, ListItem } from "native-base";
import DefaultScreen from "./DefaultScreen";
import { StyleSheet, Image, TouchableHighlight, TouchableOpacity, BackHandler } from "react-native";
import { withNavigation } from "react-navigation";
import { GiftedChat } from 'react-native-gifted-chat'

class ChatPageScreen extends React.Component {
    state = {
        name: "Monitora",
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

    render() {
        content = (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        )
        return (
            <DefaultScreen
                title={this.state.name}
                content={content}
                {...this.props} />
        )
    }
}

const styles = StyleSheet.create({
    
})

export default withNavigation(ChatPageScreen)