import React from "react"
import { View, Container, Header, Left, Button, Body, Right, Title, Text, List, ListItem, Card, CardItem, ActionSheet, Spinner } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import DefaultScreen from "./DefaultScreen";
import { StyleSheet, Image, TouchableHighlight, TouchableOpacity } from "react-native"
import Colors from "../constants/Colors"

const REGIOES = ["São Carlos/SP", "Grande São Paulo/SP", "ABC/SP", "Cancelar"]

export default class LandingPageScreen extends React.Component {
    state = {
        isLoading: true,
        regiao: REGIOES[0],
        list: [
            {
                name: "Monitora",
                slogan: "Soluções tecnologicas",
                jobs: "30 vagas",
                picture: "https://www.monitoratec.com.br/img/monitora-ambiente.jpg",
            },
            {
                name: "Serasa Experian",
                slogan: "A gente trabalha para você crescer",
                jobs: "24 vagas",
                picture: "https://www.inova.jor.br/wp-content/uploads/2018/07/hackathon.jpg",
            },
            {
                name: "Serasa Experian",
                slogan: "A gente trabalha para você crescer",
                jobs: "24 vagas",
                picture: "https://www.inova.jor.br/wp-content/uploads/2018/07/hackathon.jpg",
            },
            {
                name: "Serasa Experian",
                slogan: "A gente trabalha para você crescer",
                jobs: "24 vagas",
                picture: "https://www.inova.jor.br/wp-content/uploads/2018/07/hackathon.jpg",
            },
            {
                name: "Serasa Experian",
                slogan: "A gente trabalha para você crescer",
                jobs: "24 vagas",
                picture: "https://www.inova.jor.br/wp-content/uploads/2018/07/hackathon.jpg",
            },
            {
                name: "Serasa Experian",
                slogan: "A gente trabalha para você crescer",
                jobs: "24 vagas",
                picture: "https://www.inova.jor.br/wp-content/uploads/2018/07/hackathon.jpg",
            },
            {
                name: "Serasa Experian",
                slogan: "A gente trabalha para você crescer",
                jobs: "24 vagas",
                picture: "https://www.inova.jor.br/wp-content/uploads/2018/07/hackathon.jpg",
            },
        ],        
    }
    _handleFilterPress = () => {
        ActionSheet.show({
            options: REGIOES,
            cancelButtonIndex: REGIOES.length-1,
            title: "Escolha sua região"
        }, 
        buttonIndex => {
            if (buttonIndex != REGIOES.length - 1) {
                this.setState({ regiao: REGIOES[buttonIndex] }, this._updateList);
            }
        })
    }
    _updateList() {
        this.setState({ isLoading: true })
        let newList = this.state.list; // fetch http with this.state.regiao
        
        this.setState({ list: newList, isLoading: false })
    }
    render() {
        if (this.state.isLoading) {
            content = (
                <Spinner />
            )
        } else {
            content = (
                <List
                    style={styles.list}
                    dataArray={this.state.list}
                    renderRow={data => {
                        return (
                            <Card>
                                <CardItem style={styles.cardItem}>
                                    <Left style={styles.cardLeft}>
                                        <View style={styles.leftHolder}>
                                            <Text style={styles.name}>{data.name}</Text>
                                            <Text style={styles.slogan}>{data.slogan}</Text>
                                            <Text style={styles.jobs}>{data.jobs}</Text>
                                        </View>
                                    </Left>
                                    <Right style={styles.cardRight}>
                                        <Image
                                            square large
                                            source={{ uri: data.picture }}
                                            style={{ height: 200, width: 150, flex: 1 }}
                                        />
                                    </Right>
                                </CardItem>
                            </Card>
                        );
                    }}
                />
            )
        }
        footer = (
            <TouchableHighlight
                onPress={this._handleFilterPress}
                style={styles.footer}
            >
                <View
                    style={styles.footer}
                >
                    <Icon
                        style={{...styles.white, ...styles.icon}}
                        name="filter"
                        size={25}
                    />
                    <View>
                        <Text style={{...styles.white, ...styles.small_text}}>Região</Text>
                        <Text style={styles.white}>{this.state.regiao}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
        return (
            <DefaultScreen
                title="Início"
                content={content}
                footer={footer}
                {...this.props} />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        padding: 10
    },
    cardItem: {
    },
    cardLeft: {
        position: "relative",
    },
    leftHolder: {
        flexDirection: "column",
        justifyContent: 'space-between',
        flex: 1,
        position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
    },
    cardRight: {
        flex: 1,
        marginVertical: -11,
        marginHorizontal: -16,
    },
    name: {
        fontSize: 28,
        textAlign: "left",
    },
    footer: {
        flex: 1,
        padding: 13,
        backgroundColor: Colors.tintColor,
        flexDirection: "row",
        alignItems: "center"
    },
    white: {
        color: "#fff"
    },
    small_text: {
        fontSize: 10
    },
    icon: {
        marginRight: 13
    }
})