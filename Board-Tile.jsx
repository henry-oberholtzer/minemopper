import React from 'react';
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { boardGraphics } from './board-graphics';
import { overlayGraphics } from './board-graphics';
import { useState } from 'react';

const BoardTile = ({ type }) => {
	const [displayState, setDisplayState] = useState('tile');

	const views = {
		tile: overlayGraphics[0],
		flag: overlayGraphics[1],
		self: boardGraphics[type],
	};

	return (
		<Pressable
			key={type}
			value={type}
			style={styles.boardTileTrigger}
			onPress={() => {
				setDisplayState('self');
			}}
			onLongPress={() => setDisplayState('flag')}>
			<Image
				source={views[displayState]}
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
