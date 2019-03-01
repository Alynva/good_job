import React from "react";
import { View, Text, Button, List, Card, CardItem, Left, Right, ListItem, Container, ActionSheet } from "native-base";
import DefaultScreen from "./DefaultScreen";
import { StyleSheet, Image, TouchableHighlight, TouchableOpacity, BackHandler } from "react-native";
import { withNavigation } from "react-navigation";

const CARGOS = ["Back-end", "Front-end", "RH"]

class CompanyPageScreen extends React.Component {
    state = {
        name: "Monitora",
        slogan: "Soluções tecnológicas",
        jobs: "57 vagas",
        picture: "https://www.monitoratec.com.br/img/monitora-ambiente.jpg",
        listaVagas: [
            { nome: "Desenvolvedor Android", qtd: 6 },
            { nome: "Desenvolvedor iOS", qtd: 8 },
            { nome: "Dev Full Stack", qtd: 5 },
            { nome: "Desenvolvedor de Infraestrutura", qtd: 7 },
            { nome: "Estágio", qtd: 7 },
            { nome: "Arquiteto de Software", qtd: 8 },
            { nome: "DevOps", qtd: 9 },
            { nome: "Quality Assurance Analist", qtd: 2 },
            { nome: "Product Owner", qtd: 5 },
        ],
        classificacao: 9.5
    }

    _handleChat = () => {
        let destination = this.props.navigation.state.routeName
        if (this.props.screenProps.user) {
            ActionSheet.show({
                    options: CARGOS,
                    title: "Com qual cargo deseja conversar"
                }, 
                buttonIndex => {
                    this.props.navigation.navigate("ChatPage", { chat: CARGOS[buttonIndex] })
                }
            )
        } else
            this.props.navigation.navigate("LoginPage", {
                redirectTo: destination,
                redirectToProps: {
                    openActionSheet: true
                },
                backTo: destination
            })
    }
    
    render() {
        
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
                                <ListItem onPress={() => this.props.navigation.navigate("JobPage")}>
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
            <Button rounded onPress={this._handleChat}>
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