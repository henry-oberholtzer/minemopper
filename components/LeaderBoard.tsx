import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type LeaderBoardProps = {
	scores: Array<{ id: number; name: string; score: number; date: string }>;
};

const LeaderBoard: React.FC<LeaderBoardProps> = ({ scores }) => {
	const sortedScores = scores
		.sort((a, b) => b.score - a.score)
		.slice(0, 10);
	
	return (
		<View style={styles.container}>
			<Text style={styles.header}>All-Time Top Scores</Text>
			{sortedScores.map((player, index) => (
				<View key={player.id} style={styles.playerScore}>
					<Text>{index + 1}. {player.name}: {player.score}: {player.date}</Text>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {

	},
	header: {

	},
	playerScore: {

	}
});

export default LeaderBoard;