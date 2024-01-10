import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db } from '../src/auth/Firebase';
import { collection, getDocs, query } from "firebase/firestore";


// type LeaderBoardProps = {
// 	scores: Array<{ id: number; name: string; score: number; date: string }>;
// };

// const LeaderBoard: React.FC<LeaderBoardProps> = ({ scores }) => {
export default function LeaderBoard() {
	
	const [highScores, setHighScores] = useState([]);

	// CHANGE THIS ONCE IN PRODUCTION ! ! !
	const scoreCollection = "dummyScores";

	useEffect(() => {
		async function getHighScores() {
			const scoresQuery = await getDocs(query(collection(db,scoreCollection)));
			scoresQuery.forEach((doc) => {
				setHighScores((prevList) => [...prevList, doc.data()]);
			});
		}
		getHighScores();
	}, []);

	// const sortedScores = scores.sort((a, b) => b.score - a.score).slice(0, 10);

	return (
		<View style={styles.mainBodyStyle}>
			{/* <Text style={styles.header}>All-Time Top Scores</Text>
			{sortedScores.map((player, index) => (
				<View
					key={player.id}
					style={styles.playerScore}>
					<Text>
						{index + 1}. {player.name}: {player.score}: {player.date}
					</Text>
				</View>
			))} */}
			<Text>Hello</Text>
			{highScores.map((score, index) => (
				<Text key='index'>
					Score: {score.name}
				</Text>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	header: {},
	playerScore: {},
	mainBodyStyle: {
		backgroundColor: '#C0C0C0',
		width: '100%'
	},
});

// export default LeaderBoard;