import React from "react";
import { View, Text, Button, List, Card, CardItem, Left, Right, ListItem } from "native-base";
import DefaultScreen from "./DefaultScreen";
import { StyleSheet, Image, TouchableHighlight, TouchableOpacity, BackHandler } from "react-native";
import { withNavigation } from "react-navigation";

class JobPageScreen extends React.Component {
    state = {
        title: "Front-End",
        company: "Monitora",
        picture: "https://www.monitoratec.com.br/img/monitora-ambiente.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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