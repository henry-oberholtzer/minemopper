import React from 'react';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';

const StartPopUp: React.FC = () => {
	return (
		<View style={styles.container}>
			<Button title="Easy" onPress={() => { }} />
			<Button title="Normal" onPress={() => { }} />
			<Button title="Hard" onPress={() => { }} />

			<View style={styles.toggleContainer}>
				<Text>Oops Mode</Text>
				<Switch value={false} onValueChange={() => { }} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	toggleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 20,
	}
});

export default StartPopUp;