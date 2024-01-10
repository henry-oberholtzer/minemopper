import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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

	const sortedScores = highScores.sort((a, b) => b.score - a.score).slice(0, 10);

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
			<Text>All-Time Scores</Text>
			<View style={styles.boardBody}>
				<View style={styles.boardSectionHeaders}>
					<View>
						<Text>Name</Text>
						<FlatList 
						data={sortedScores}
						renderItem={
							(item) => <Text>{item.item.name}</Text>
						}
						/>
					</View>

					<View>
						<Text>Date</Text>
						<FlatList 
						data={sortedScores}
						renderItem={
							(item) => <Text>{item.item.date}</Text>
						}
						/>
					</View>

					<View>
						<Text>Score</Text>
						<FlatList 
						data={sortedScores}
						renderItem={
							(item) => <Text>{item.item.score}</Text>
						}
						/>
					</View>

				</View>
			</View>
			
			<Text>Must play on Hard difficulty to rank on the leaderboard.</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	mainBodyStyle: {
		backgroundColor: '#C0C0C0',
		width: '100%'
	},
	boardBody: {
		backgroundColor: '#9AE19D',
		width: '80%',
		marginLeft: '10%',
		marginRight: '10%',
		padding: '4%'
	},
	boardSectionHeaders: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	boardPlayerScoreStyle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	}
});

// export default LeaderBoard;