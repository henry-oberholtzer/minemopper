import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const MainMenu = () => {
	const [view, setView] = useState(0);

	const styles = StyleSheet.create({
		buttonStyles: {
			backgroundColor: '#9AE19D',
			color: 'white',
			textAlign: 'center',
			padding: 10,
			margin: 10,
		},
		headerStyle: {
			height: 50,
			width: '100%',
			backgroundColor: '#E39600',
		},
		footerStyle: {
			backgroundColor: '#474A48',
			height: 50,
		},
	});

	const pregame = () => {
		setView(1);
	};

	const exit = () => {
		setView(0);
	};

	let currentView;

	if (!view) {
		currentView = (
			<>
				<View>
					<TouchableOpacity
						style={styles.buttonStyles}
						onPress={() => pregame()}>
						<Text>Start game</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonStyles}>
						<Text>Resume game</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonStyles}>
						<Text>View leaderboard</Text>
					</TouchableOpacity>
				</View>
			</>
		);
	} else {
		currentView = (
			<View>
				<TouchableOpacity
					style={styles.buttonStyles}
					onPress={() => exit()}>
					<Text>Back</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonStyles}>
					<Text>Difficulty</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonStyles}>
					<Text>Oops mode?</Text>
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<>
			<View style={styles.headerStyle}></View>
			<View>
				<Text>An image goes hear!</Text>
			</View>
			{currentView}
			<View style={styles.footerStyle}>
				<Text style={{ color: 'white' }}>
					Copyright Teddy, Henry, Aaron, Grant, and Chris. NO STEALING
				</Text>
			</View>
		</>
	);
};

export default MainMenu;
