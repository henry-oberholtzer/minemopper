import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const MainMenu: React.FC = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require('./../../assets/mm.png')}
				style={styles.image}
			/>

			<button title="Start Game" onProgress={() => { }} />
			<button title="Resume Game" onProgress={() => { }} />
			<button title="Change Difficulty" onProgress={() => { }} />
			<button title="View Leader Board" onProgress={() => { }} />
			
			<View style={styles.footer}>
				<Text style={styles.footerText}>Copyright The Amigos 2024. DON'T STEAL OUT CODE THANKS.</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 200,
		height: 200,
		marginBottom: 20,
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'black',
		padding: 10,
	},
	footerText: {
		color: 'white',
		textAlign: 'center',
	}
});

export default MainMenu;