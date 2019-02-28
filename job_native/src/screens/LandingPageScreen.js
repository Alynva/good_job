import React from "react"
import { View, Container, Header, Left, Button, Body, Right, Title, Text, List, ListItem, Card, CardItem } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import DefaultScreen from "./DefaultScreen";
import { StyleSheet, Image } from "react-native"

const list = [
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
    }
]

export default class LandingPageScreen extends React.Component {
    content = (
        <List
            style={styles.list}
            dataArray={list}
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
                                source={{uri: data.picture}}
                                style={{height: 200, width: 150, flex: 1}}
                            />
                        </Right>
                    </CardItem>
                </Card>
              );
            }}
        />
    )
    render() {
        return (
            <DefaultScreen title="Início" content={this.content} {...this.props} />
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
    }
})