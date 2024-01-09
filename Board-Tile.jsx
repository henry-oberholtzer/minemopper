import React from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';
import { boardGraphics } from './board-graphics';
import { useState } from 'react';

const handleOnPress = (type) => {
	return (setDetonate) => {
		return (setDisplayState) => {
			if (type === 10) {
				setDetonate(true); // Would like this to preserve the square that was hit, and keep the already marked squares as they are
				setDisplayState(9);
				console.log('trigger game over');
			} else if (type === 0) {
				setDisplayState(0);
				console.log('reveal neighboring squares');
			} else {
				setDisplayState(type);
			}
		};
	};
};

const BoardTile = ({ type, location, setDetonate, detonate }) => {
	const [displayState, setDisplayState] = useState(11);

	return (
		<Pressable
			id={location}
			key={type}
			style={styles.boardTileTrigger}
			onPress={() => handleOnPress(type)(setDetonate)(setDisplayState)}
			onLongPress={() => console.log('I will set a flag')}>
			<Image
				id={location + 'img'}
				source={detonate ? boardGraphics[type] : boardGraphics[displayState]}
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
