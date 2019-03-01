import React from "react";
import { StyleSheet, Image } from "react-native";
import {
	View,
	Button,
	Text,
	Container,
	List,
	ListItem,
	Content,
} from "native-base";

const routes = ["LandingPage", "MessagesPage"];

export default class SideBar extends React.Component {
	_handleLoginButton = () => {
		let destination = this.props.navigation.state.routes[this.props.navigation.state.index].routeName
		this.props.navigation.navigate("LoginPage", {
			redirectTo: destination,
			backTo: destination
		})
	}
	_handleListPress = data => {
		switch (data) {
			case "Sair":
				this.props.screenProps.logout()
				break;
		
			default:
				this.props.navigation.navigate(data)
				this.props.navigation.closeDrawer()
				break;
		}

	}
	render() {
		let login, dataArray = routes.slice();
		if (this.props.screenProps.user) {
			dataArray[routes.length] = "Sair"
			login = (
				<Text style={{...styles.user_name}}>{this.props.screenProps.user.name}</Text>
			)
		} else {
			login = (
				<Button style={{alignSelf: "center"}} onPress={this._handleLoginButton}><Text>Fazer login</Text></Button>
			)
		}
		let nome = {
			LandingPage: "Página inicial",
			MessagesPage: "Mensagens",
		}
		return (
			<Container>
				<Content>
					<View
						style={{ ...styles.thumb_holder }}
					>
						<Image
							source={{
								uri:
									"https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
							}}
							style={{...styles.thumb}}
						/>
						{login}
					</View>
					<List
						dataArray={dataArray}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => this._handleListPress(data)}
								>
									<Text>{nome[data]}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	user_name: {
		color: "#fff",
		fontSize: 25
	},
	thumb_holder: {
		height: 120,
		flexDirection: "column",
		justifyContent: "flex-end",
		padding: 10
	},
	thumb: {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignSelf: "stretch",
		position: "absolute"
	}
})