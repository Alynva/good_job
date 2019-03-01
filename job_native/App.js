import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Root } from 'native-base'
import { AppLoading, Asset, Font } from 'expo';
import Navigator from "./src/navigation/Navigator"

const defaultUser = {
	name: "Alisson Nunes"
}

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
		user: null
	};
	_login() {
		this.setState({ user: defaultUser })
	}
	_logout() {
		this.setState({ user: null })
	}

	render() {
		let screenProps = {
			user: this.state.user,
			login: this._login.bind(this),
			logout: this._logout.bind(this),
		}
		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			);
		} else {
			return (
				<View style={styles.container}>
					{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
					<Root>
						<Navigator screenProps={screenProps} />
					</Root>
				</View>
			);
		}
	}

	_loadResourcesAsync = async () => {
		return Promise.all([
			Asset.loadAsync([
			]),
			Font.loadAsync({
				// This is the font that we are using for our tab bar
				// ...Icon.Ionicons.font,
				Roboto: require("native-base/Fonts/Roboto.ttf"),
				Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
			}),
		]);
	};

	_handleLoadingError = error => {
		// In this case, you might want to report the error to your error
		// reporting service, for example Sentry
		console.warn(error);
	};

	_handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true });
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
});