import React from "react"
import { View, Container, Header, Left, Button, Body, Right, Title, Content, Footer } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import { StyleSheet } from "react-native"

export default class DefaultScreen extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.toggleDrawer()}
                        >
                            <Icon
                                name="bars"
                                size={25}
                                color="#fff"
                            />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.title}</Title>
                    </Body>
                    <Right>{this.props.right}</Right>
                </Header>
                <Content>{this.props.content}</Content>
                <Footer style={styles.footer}>{this.props.footer}</Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "transparent"
    }
})