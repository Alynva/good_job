import React from "react";
import { View, Text, Button, List, Card, CardItem, Left, Right, ListItem } from "native-base";
import DefaultScreen from "./DefaultScreen";
import { StyleSheet, Image, TouchableHighlight, TouchableOpacity, BackHandler } from "react-native";
import { withNavigation } from "react-navigation";

class JobPageScreen extends React.Component {
    state = {
        title: "Desenvolvedor Android",
        company: "Monitora",
        picture: "https://www.monitoratec.com.br/img/monitora-ambiente.jpg",
        desc: "Procuramos por Desenvolvedores Android que gostem da ideia de aprender algo novo todos os dias, e de conviver com pessoas e estilos de trabalho diferentes. Que gostem muito de codar, tem paixão por desenvolver bonito (código + interface), sabem que arquitetura é algo importante e que quando \"só falta testar\" ainda falta muita coisa. Que gostem muito do mundo Mobile e curtam a ideia de contribuir para o aprendizado e desenvolvimento dos colaboradores com menos experiência.",
        count: 3,
        candidatado: false,
        txtBtn: "Candidatar",
    }
    
    render() {
        let navigator = this.props.navigation
        
        content = (
            <View>
                <Image
                    square large
                    source={{ uri: this.state.picture }}
                    style={{ height: 200, width: "100%", flex: 1 }}
                />
                <ListItem itemHeader first>
                    <Text> Descrição </Text>
                </ListItem>
                <Text>
                    {this.state.desc}
                </Text>
            </View>
        )

        footer = (
            <View style={styles.buttonView}>
                <Button 
                    rounded 
                    onPress={() => {
                        this.setState({
                            candidatado: true, 
                            txtBtn: "Aguardando resposta ...",
                        })
                    }}
                    disabled={this.state.candidatado}
                >
                    <Text> {this.state.txtBtn} </Text>
                </Button>
                <Text> </Text>
            </View>
        )
        
        return (
            <DefaultScreen
                title={this.state.title + " - " + this.state.company}
                content={content}
                footer={footer}
                {...this.props} />
        )
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
    }
    
    handleBackPress = () => {
        this.props.navigation.navigate("CompanyPage")
        return true;
    }

}

const styles = StyleSheet.create({
    
})

export default withNavigation(JobPageScreen)