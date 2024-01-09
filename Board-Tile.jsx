import React from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';
import { boardGraphics } from './board-graphics';
import { useState } from 'react';

const handleOnPress = (type) => {
	return (location) => {
		return (detonationFunction) => {
			return (setDisplayState) => {
				if (type === 10) {
					setDisplayState(9);
					detonationFunction(location);
					console.log('game is over and the board should now be revealed');
				} else if (type === 0) {
					setDisplayState(0);
					console.log('reveal neighboring squares');
				} else {
					setDisplayState(type);
				}
			};
		};
	};
};

const BoardTile = ({ type, location, detonationFunction }) => {
	const [displayState, setDisplayState] = useState(11);
	return (
		<Pressable
			id={location}
			key={type}
			style={styles.boardTileTrigger}
			onPress={() =>
				handleOnPress(type)(location)(detonationFunction)(setDisplayState)
			}
			onLongPress={() => console.log('I will set a flag')}>
			<Image
				id={location + 'img'}
				source={boardGraphics[displayState]}
				style={styles.image}
			/>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 32,
		height: 32,
		flex: 1,
	},
});

export default BoardTile;
