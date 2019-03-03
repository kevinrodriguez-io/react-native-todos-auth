import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default (props) => {
  return (
    <View style={styles.container}>
      <Text>Sign in here</Text>
    </View>
  );
};