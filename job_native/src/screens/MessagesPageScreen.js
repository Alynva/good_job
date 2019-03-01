import React from "react";
import { View, Text, Button, List, Card, CardItem, Left, Right, ListItem, Container } from "native-base";
import DefaultScreen from "./DefaultScreen";
import { StyleSheet, Image, TouchableHighlight, TouchableOpacity, BackHandler } from "react-native";
import { withNavigation } from "react-navigation";

export default class MessagesPageScreen extends React.Component {
    state = {
        name: "Chats",
        listaChats: [
            {
                company: "Monitora",
                job: "Front-End Developer",
            },
            {
                company: "iFood",
                job: "Analista de Dados",
            },
            {
                company: "Movile",
                job: "Desenvolvedor Android",
            },
            {
                company: "Monitora",
                job: "Back-End Developer",
            },
            {
                company: "Wavy",
                job: "Estágio",
            },
        ]
    }

    _handleChat = () => {
        let destination = this.props.navigation.state.routeName
        console.log(destination)
        if (this.props.screenProps.user)
            this.props.navigation.navigate("ChatPage")
        else
            this.props.navigation.navigate("LoginPage", { redirectTo: "ChatPage", backTo: destination })
    }
    componentDidUpdate() {
        if (!this.props.screenProps.user) {
            this.props.navigation.navigate("LoginPage")
        }
    }
    
    render() {
        content = (
            <List
                style={styles.list}
                dataArray={this.state.listaChats}
                renderRow={data => {
                    return (
                        <View>
                            <ListItem onPress={() => this.props.navigation.navigate("ChatPage", data)}>
                                <Left style={styles.listItemLeft}>
                                    <View style={styles.leftHolder}>
                                        <Text>{data.company + " - " + data.job}</Text>
                                    </View>
                                </Left>
                                <Right style={styles.listItemLeft}>
                                    <View style={styles.rightHolder}>
                                        <Text></Text>
                                    </View>
                                </Right>
                            </ListItem>
                        </View>
                    );
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