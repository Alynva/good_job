import React from "react"
import { View, Container, Header, Left, Button, Body, Right, Title, Content, Footer } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import { StyleSheet } from "react-native"

export default class DefaultScreen extends React.Component {
    render() {
        let footer
        if(this.props.footer)
            footer = <Footer style={styles.footer}>{this.props.footer}</Footer>
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
                <Container>{this.props.content}</Container>
                {footer}
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "transparent"
    }
})