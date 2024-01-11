import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { clockGraphics, smileGraphics } from '../board-graphics';

const BoardHeader = (props: BoardHeader) => {
	const { mineCount } = props;
	const minesOnes = mineCount % 10;
	const minesTens = Math.trunc((mineCount % 100) / 10);
	const minesHundreds = Math.trunc(mineCount / 100);
	return (
		<View style={styles.header}>
			<View style={styles.counter}>
				<Image
					style={styles.digit}
					source={clockGraphics[minesHundreds]}
				/>
				<Image
					style={styles.digit}
					source={clockGraphics[minesTens]}
				/>
				<Image
					style={styles.digit}
					source={clockGraphics[minesOnes]}
				/>
			</View>
			<Image
				style={styles.smile}
				source={smileGraphics['happy']}
			/>
			<View style={styles.counter}>
				<Image
					style={styles.digit}
					source={clockGraphics[10]}
				/>
				<Image
					style={styles.digit}
					source={clockGraphics[10]}
				/>
				<Image
					style={styles.digit}
					source={clockGraphics[10]}
				/>
			</View>
		</View>
	);
};

export default BoardHeader;

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#bfbfbfff',
		display: 'flex',
		flexDirection: 'row',
	},
	counter: {
		height: 62,
		width: 120,
		padding: 2,
		display: 'flex',
		flexDirection: 'row',
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
	mineCount: number;
	timerStart: boolean;
}
