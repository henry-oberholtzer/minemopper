import { useState } from 'react';
import { View, StyleSheet, Text, Image, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from './Button';


const MainMenu = () => {
    const [view, setView] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const pregame = () => {
        setView(true);
    };

    const modalOn = () => {
        setModalVisible(true);
    };

    const modalOff = () => {
        setModalVisible(false);
    };

    const exit = () => {
        setView(false);
    };

    let currentView;

    if (!view) {
        currentView = (
            <>
                <View style={styles.buttonContainer}>
                    <Button label="Start Game" func={pregame} />
                    <Button label="Resume Game" />
                    <Button label="View Leaderboard" />
                    <Button label="Sign out" />
                </View>
            </>
        );
    } else {
        currentView = (
            <View style={styles.buttonContainer}>
                <Button label="Difficulty" func={modalOn} />
                <Button label="Oops mode?" />
                <Button label="Back" func={exit} theme="back-button" />
                <Modal visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                    animationType="slide">
                    <View style={styles.headerStyle}></View>
                    <View style={styles.buttonContainer}>
                        <Button label="Easy" />
                        <Button label="Medium" />
                        <Button label="Hard" />
                        <Button label="Back" func={modalOff} theme="back-button" />
                    </View>
                </Modal>
            </View>
        );
    }

    return (
        <>
            <View style={styles.headerStyle}></View>
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

const TitleImage = require('../assets/images/minemopper.png')

const styles = StyleSheet.create({
    headerStyle: {
        height: 40,
        width: "100%",
        backgroundColor: '#E39600',
        position: "absolute",
        top: 0
    },
    buttonContainer: {
        width: 320,
        height: 68,
        margin: 20,
        position: 'absolute',
        top: 200,
        padding: 3,
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
    imageContainer: {
        position: 'absolute',
        top: 40,
        alignItems: "center",
        marginBottom: 20
    },
    image: {
        width: wp('100%'),
        height: hp('30%'),
    }
});

export default MainMenu;