import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { clockGraphics } from '../board-graphics';

const Timer = (props: TimerProps) => {
	const [seconds, setSeconds] = useState(0);
	const clockSeconds = seconds % 10;
	const clockTens = Math.trunc((seconds % 100) / 10);
	const clockHundreds = Math.trunc(seconds / 100);

	useEffect(() => {
		let interval = null;

		if (props.isActive) {
			interval = setInterval(() => {
				setSeconds((seconds) => seconds + 1);
			}, 1000);
		} else if (!props.isActive && seconds !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [props.isActive, seconds]);

	return (
		<View style={styles.counter}>
			<Image
				style={styles.digit}
				source={clockGraphics[clockHundreds]}
			/>
			<Image
				style={styles.digit}
				source={clockGraphics[clockTens]}
			/>
			<Image
				style={styles.digit}
				source={clockGraphics[clockSeconds]}
			/>
		</View>
	);
};

export default Timer;

interface TimerProps {
	isActive: boolean;
}

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
});
