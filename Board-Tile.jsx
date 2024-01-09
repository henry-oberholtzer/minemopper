import React from 'react';
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { boardGraphics } from './board-graphics';

const BoardTile = ({ type }) => {
	return (
		<Pressable
			key={type}
			value={type}
			style={styles.boardTileTrigger}
			onPress={(e) => alert(e.target.value)}>
			<Image
				source={boardGraphics[type]}
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
