import React from "react";
import { View, Text, Button, List, Card, CardItem, Left, Right, ListItem, Container } from "native-base";
import DefaultScreen from "./DefaultScreen";
import { StyleSheet, Image, TouchableHighlight, TouchableOpacity, BackHandler } from "react-native";
import { withNavigation } from "react-navigation";

class CompanyPageScreen extends React.Component {
    state = {
        name: "Monitora",
        slogan: "Soluções tecnológicas",
        jobs: "30 vagas",
        picture: "https://www.monitoratec.com.br/img/monitora-ambiente.jpg",
        listaVagas: [
            {nome: "Front-End", qtd: 3},
            {nome: "Back-End", qtd: 2},
            {nome: "Front-End", qtd: 3},
            {nome: "Back-End", qtd: 2},
            {nome: "Front-End", qtd: 3},
            {nome: "Back-End", qtd: 2},
            {nome: "Front-End", qtd: 3},
            {nome: "Back-End", qtd: 2},
        ],
        classificacao: 9.5
    }
    
    render() {
        let navigator = this.props.navigation
        
        content = (
            <Container>
                <Image
                    square large
                    source={{ uri: this.state.picture }}
                    style={{ height: 200, width: "100%" }}
                />
                <ListItem itemHeader first>
                    <Text> Vagas </Text>
                </ListItem>
                <List
                    style={styles.list}
                    dataArray={this.state.listaVagas}
                    renderRow={data => {
                        return (
                                <View>
                                    <ListItem onPress={() => navigator.navigate("JobPage")}>
                                        <Left style={styles.listItemLeft}>
                                            <View style={styles.leftHolder}>
                                                <Text>{data.nome}</Text>                                             
                                            </View>
                                        </Left>
                                        <Right style={styles.listItemLeft}>
                                            <View style={styles.rightHolder}>
                                                <Text>{data.qtd}</Text>                                             
                                            </View>
                                        </Right>
                                    </ListItem>
                                </View>
                            
                        );
                    }}
                
                />

                <ListItem itemHeader first>
                    <Text> Classificação: {this.state.classificacao} </Text>
                </ListItem>
            
            </Container>
             
        )
        footer = (
            <Button rounded onPress={() => navigator.navigate("LandingPage")}>
                <Text> Conversar </Text>
            </Button>
        )
        return (
            <DefaultScreen
                title={this.state.name}
                content={content}
                footer={footer}
                {...this.props} />
        )
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    handleBackPress = () => {
        this.props.navigation.navigate("LandingPage")
        return true;
    }

    
}

const styles = StyleSheet.create({
    List: {

    },
    listItemLeft: {

    },
    listItemRight: {

    },
    leftHolder: {

    },
    rightHolder: {

    },
})

export default withNavigation(CompanyPageScreen)