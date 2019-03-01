import React from "react"
import { View, Container, Header, Left, Button, Body, Right, Title, Content, Footer } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import { StyleSheet } from "react-native"

export default class DefaultScreen extends React.Component {
    render() {
        let footer, content, container
        if(this.props.footer)
            footer = <Footer style={styles.footer}>{this.props.footer}</Footer>
        if (this.props.content)
            content = <Content>{this.props.content}</Content>
        if (this.props.container)
            container = <Container>{this.props.container}</Container>
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
                {container}
                {content}
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