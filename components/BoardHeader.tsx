import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { clockGraphics, smileGraphics } from '../board-graphics';

const BoardHeader = (props) => {
	return (
		<View style={styles.header}>
			<View style={styles.counter}>
				<Image
					style={styles.digit}
					source={clockGraphics['blank']}
				/>
				<Image
					style={styles.digit}
					source={clockGraphics['blank']}
				/>
				<Image
					style={styles.digit}
					source={clockGraphics['blank']}
				/>
			</View>
			<Image
				style={styles.smile}
				source={smileGraphics['happy']}
			/>
			<View style={styles.counter}>
				<Image
					style={styles.digit}
					source={clockGraphics['blank']}
				/>
				<Image
					style={styles.digit}
					source={clockGraphics['blank']}
				/>
				<Image
					style={styles.digit}
					source={clockGraphics['blank']}
				/>
			</View>
		</View>
	);
};

export default BoardHeader;

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#bfbfbfff',
	},
	counter: {
		height: 62,
		width: 112,
		padding: 2,
		backgroundColor: '#807d84ff',
	},
	digit: {
		height: 62,
		width: 40,
		padding: 2,
		backgroundColor: '#807d84ff',
	},
	smile: {
		height: 62,
		width: 62,
		padding: 2,
		backgroundColor: '#807d84ff',
	},
});

interface BoardHeader {
	bombCount: number;
	timerStart: boolean;
}
