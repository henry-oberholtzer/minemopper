import { useState } from 'react';
import { View, StyleSheet, Text, Image, Modal } from 'react-native';
import Button from './Button';
import LeaderBoard from './LeaderBoard';
import { signOut } from "firebase/auth";
import { auth } from './auth/Firebase';

const MainMenu = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [leaderboardVisible, setLeaderboardVisible] = useState(false);

    const modalOn = () => {
        setModalVisible(true);
    };

    const modalOff = () => {
        setModalVisible(false);
    };

    const goToBoard = (x, y, bombs) => {
        navigation.navigate('Board', { row: x, column: y, bombsNum: bombs });
    }

    const play = (x, y, bombs) => {
        goToBoard(x, y, bombs);
        modalOff();
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigation.navigate("LogIn")
            console.log("Signed out successfully")
        } catch (error) {
            console.log("Error: ", error.message)
        };
    }


    let currentView = (
        <>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button label="Start Game" func={() => modalOn()} />
                    <Button label="Resume Game" />
                    <Button label="View Leaderboard" func={() => setLeaderboardVisible(true)} />
                    <Button label="Sign out" func={() => handleSignOut()} />
                    <Modal visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                        animationType="slide">
                        <View style={styles.modalStyle}>
                            <View style={styles.headerStyle}></View>
                            <View style={styles.buttonContainer}>
                                <Button label="Easy" func={() => play(10, 20, 40)} />
                                <Button label="Medium" func={() => play(10, 20, 60)} />
                                <Button label="Hard" func={() => play(10, 20, 80)} />
                                <Button label="Back" func={() => modalOff()} theme="back-button" />
                            </View>
                        </View>
                    </Modal>
                    <Modal visible={leaderboardVisible}
                        onRequestClose={() => setLeaderboardVisible(false)}
                        animationType="slide"
                        style={styles.container}>
                        <View style={styles.headerStyle}></View>
                        <View style={styles.leaderboardContainer}>
                            <LeaderBoard />
                            <Button label="Back" func={() => setLeaderboardVisible(false)} theme="back-button" />
                        </View>
                    </Modal>
                </View>
            </View>
        </>
    )

    return (
        <>
            {/* <View style={styles.headerStyle}></View> */}
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={TitleImage} />
            </View>
            {currentView}
            <View style={styles.footerStyle}>
                <Text style={{ color: 'white' }}>
                    Copyright Teddy, Henry, Aaron, Grant, and Chris. NO STEALING
                </Text>
            </View>
        </>
    );
};

const TitleImage = require('../assets/mm.png')

const styles = StyleSheet.create({
    headerStyle: {
        height: 40,
        width: "100%",
        backgroundColor: '#E39600',
        position: "absolute",
        top: 0
    },
    imageContainer: {
        alignItems: 'center',
        backgroundColor: '#C0C0C0'
    },
    buttonContainer: {
        width: 320,
        height: 68,
        margin: 20,
        position: 'absolute',
        top: 25,
        padding: 3,
    },
    leaderboardContainer: {
        position: 'absolute',
        top: 40,
        width: '100%',
        backgroundColor: '#C0C0C0',
        bottom: 0,
    },
    footerStyle: {
        backgroundColor: '#474A48',
        height: 50,
        width: "100%",
        padding: 5,
        alignItems: "center",
        position: "absolute",
        bottom: 0
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalStyle: {
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default MainMenu;
