import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Header, Body, Title, Button, Icon, Text } from 'native-base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: { height: 200, width: 200 },
	pb20: {
		paddingBottom: 20,
	},
	bold: {
		fontWeight: 'bold',
	},
	mx5: { marginLeft: '5%', marginRight: '5%' },
});

const SigninScreen = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo_transparent.png')} />
			<Text style={{ ...styles.pb20, ...styles.bold }}>Welcome to Todos, your daily companion</Text>
			<Text style={styles.pb20}>Please sign in to get started</Text>
			<Button rounded iconLeft block style={styles.mx5}>
				<Icon name="logo-google" />
				<Text>Sign in with Google</Text>
			</Button>
		</View>
	);
};

SigninScreen.navigationOptions = ({ navigation }) => ({
	header: null,
});

export default SigninScreen;
