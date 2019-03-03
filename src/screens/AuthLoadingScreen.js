import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default class AuthLoadingScreen extends Component {
	constructor(props) {
		super(props);
		this.loadAuthState();
	}

	loadAuthState = async () => {
		const { navigation } = this.props;
		setTimeout(() => {
			if (Math.random() >= 0.5) {
				navigation.navigate('AuthStack');
			} else {
				navigation.navigate('AppStack');
			}
		}, 2000);
	};

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}
