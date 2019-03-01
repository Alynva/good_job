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

    _handlePress = () => {
        let destination = this.props.navigation.state.routeName
        if (this.props.screenProps.user) {
            this.setState({
                candidatado: true, 
                txtBtn: "Aguardando resposta ...",
            })
        } else
            this.props.navigation.navigate("LoginPage", {
                redirectTo: destination,
                backTo: destination
            })
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
                <List>
                    <ListItem itemDivider>
                        <Text>Descrição</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{this.state.desc}</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Responsabilidades e Atribuições</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Transformar processos de negócio em códigos de alta qualidade;</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Propor novas ideias criativas e inovadoras para as aplicações que estão sendo desenvolvidas;</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Desenvolver em JAVA Android + XML;</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Mergulhar no mundo Mobile {"<"}3</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Integrar um time incrível!</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Requisitos e Classicações</Text>
                    </ListItem>
                    <ListItem itemHeader>
                        <Text>Requisitos indispensáveis</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Formação em ciências da computação, engenharia da computação, análise de desenvolvimento de software ou cursos afins;</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Disponibilidade de 40 horas semanais para trabalho in loco em São Carlos;</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Conhecimentos de gestão de configuração de software (experiência com GIT);</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Experiência com a linguagem JAVA;</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Muita vontade de aprender e crescer com a gente.</Text>
                    </ListItem>
                    <ListItem itemHeader>
                        <Text>Requisitos Desejáveis:</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Conhecimentos e/ou experiência com: RxJava e APIs RESTful;</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Conhecimentos de Arquitetura de Software(MVC, MVVM), Padrões de Projeto, Lógica de Programação e UI/UX;</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Conhecer Metodologia SCRUM;</Text>
                    </ListItem>
                    <ListItem itemHeader>
                        <Text>Diferenciais:</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Inglês a partir do intermediário.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Conhecimento em Firebase (Authentication; Database; Storage) e GoogleMaps API</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Conhecimento e/ou experiência com: GraphQL(Apollo); Fabric.</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Informações Adicionais</Text>
                    </ListItem>
                    <ListItem itemHeader>
                        <Text>A Monitora é o lugar certo para você que:</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Tem muita vontade de aprender e aplicar seus conhecimentos em um ambiente corporativo, desafiador e com projetos internacionais;</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Gosta de garantir a qualidade de produto de software;</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Gosta de garantir que os usuários tenham uma boa experiência e rápida resoluções de problemas;</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Não se assusta com a ideia de um ambiente em constante mudança, aprende rápido e consegue se adaptar bem ao novo.</Text>
                    </ListItem>
                    <ListItem itemHeader>
                        <Text>Aqui você terá:</Text>
                    </ListItem>
                    <ListItem>
                        <Text>1 dia de home office por semana (a ser combinado com o gestor)</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Plano de saúde e odontológico</Text>
                    </ListItem>
                    <ListItem>
                        <Text>VR e VA</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bolsa de estudos mensal</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Convênio com academia e grupo de corrida</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Plano de carreira estruturado</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Participação nos resultados da empresa (PPR)</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Curso de inglês in company</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Integrações a cada 3 meses</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Ambiente de trabalho agradável com sala de jogos, café, bolacha e frutas a vontade.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Desconto especial em restaurantes do Shopping Passeio São Carlos</Text>
                    </ListItem>
                </List>
            </View>
        )

        footer = (
            <View style={styles.buttonView}>
                <Button 
                    rounded 
                    onPress={this._handlePress}
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