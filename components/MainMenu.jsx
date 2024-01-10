import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LeaderBoard from './LeaderBoard';

const MainMenu = () => {
	const [view, setView] = useState(0);

	const styles = StyleSheet.create({
		mainBodyStyle: {
			backgroundColor: '#C0C0C0',
			width: '100%'
		},
		mainButtonStyle: {
			backgroundColor: '#9AE19D',
			color: 'white',
			textAlign: 'center',
			padding: 10,
			margin: 10,
			width: '70%',
			marginLeft: '15%',
			marginRight: '15%',
		},
		headerStyle: {
			height: 50,
			width: '100%',
			backgroundColor: '#E39600',
		},
		footerStyle: {
			backgroundColor: '#474A48',
			height: '10%',
			width: '100%',
			textAlign: 'center',
		},
		footerTextStyle: {
			textAlign: 'center',
			color: 'white'
		},
		footerButtonStyle: {
			backgroundColor: '#9AE19D',
			color: 'white',
			textAlign: 'center',
			padding: 10,
			margin: 10,
			width: '20%',
			marginLeft: '40%',
			marginRight: '40%',
		},
		textAlignCenter: {
			textAlign: 'center'
		}
	});



	const viewPregame = () => {
		setView(1);
	};

	const viewLeaderboard = () => {
		setView(2);
	}

	const exit = () => {
		setView(0);
	};


	
	let currentView;

	const footerCopyright = (
		<View style={styles.footerStyle}>
			<Text style={styles.footerTextStyle}>
				Copyright Teddy, Henry, Aaron, Grant, and Chris. NO STEALING
			</Text>
		</View>
	)

	const footerBackButton = (
		<View style={styles.footerStyle}>
			<TouchableOpacity
				style={styles.footerButtonStyle}
				onPress={() => exit()}>
				<Text>Back</Text>
			</TouchableOpacity>
		</View>
	)

	if (view === 1) {
		currentView = (
			<>
				<View style={styles.mainBodyStyle}>
					<TouchableOpacity style={styles.mainButtonStyle}>
						<Text>Difficulty</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.mainButtonStyle}>
						<Text>Oops Mode?</Text>
					</TouchableOpacity>
				</View>
				{footerBackButton}
			</>
		);
	} else if (view === 2) {
		currentView = (
			<>
				<LeaderBoard />
				{footerBackButton}
			</>
		);
	} else {
		currentView = (
			<>
				<View>
					<Text>An image goes hear!</Text>
				</View>
				<View style={styles.mainBodyStyle}>
					<TouchableOpacity
						style={styles.mainButtonStyle}
						onPress={() => viewPregame()}>
						<Text style={styles.textAlignCenter}>Start Game</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={styles.mainButtonStyle}
						>
						<Text style={styles.textAlignCenter}>Resume Game</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.mainButtonStyle}
						onPress={() => viewLeaderboard()}>
						<Text style={styles.textAlignCenter}>View Leaderboard</Text>
					</TouchableOpacity>
				</View>
				{footerCopyright}
			</>
		);
	}

	return (
		<>
			<View style={styles.headerStyle}></View>
			{currentView}
		</>
	);
};

export default MainMenu;
