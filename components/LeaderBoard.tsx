import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { db } from './auth/Firebase';
import { collection, getDocs, query } from "firebase/firestore";


const LeaderBoard: React.FC = () => {
	
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
			<Text>{"\n"}</Text>
			<Text style={styles.mainBodyTitle}>All-Time Scores</Text>
			
			<View style={styles.boardBody}>
				<View style={styles.boardSectionHeaders}>
					<View>
						<Text style={styles.fontWeightBold}>Name</Text>
						<FlatList 
						data={sortedScores}
						renderItem={
							(item) => <Text>{item.item.name}</Text>
						}
						/>
					</View>

					<View>
						<Text style={styles.fontWeightBold}>Date</Text>
						<FlatList 
						data={sortedScores}
						renderItem={
							(item) => <Text>{item.item.date}</Text>
						}
						/>
					</View>

					<View>
						<Text style={styles.fontWeightBold}>Score</Text>
						<FlatList 
						data={sortedScores}
						renderItem={
							(item) => <Text>{item.item.score}</Text>
						}
						/>
					</View>

				</View>
				<Text>{"\n"}</Text>
				<Text style={styles.boardFootnote}>Must play on Hard difficulty to rank on the leaderboard.</Text>
			</View>
			
		</View>
	);
};

const styles = StyleSheet.create({
	mainBodyStyle: {
		backgroundColor: '#C0C0C0',
		width: '100%',
	},
	mainBodyTitle: {
		textAlign: 'center',
		fontWeight: 'bold',
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
	boardFootnote: {
		textAlign: 'center',
		fontStyle: 'italic'
	},
	fontWeightBold: {
		fontWeight: 'bold'
	}
});

export default LeaderBoard;