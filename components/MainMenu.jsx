import { useState } from 'react';
import { View, StyleSheet, Text, Image, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from './Button';

const MainMenu = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

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

    let currentView = (
        <>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button label="Start Game" func={() => modalOn()} />
                    <Button label="Resume Game" />
                    <Button label="View Leaderboard" />
                    <Button label="Sign out" />
                    <Modal visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                        animationType="slide">
                        <View style={styles.modalStyle}>
                            <View style={styles.headerStyle}></View>
                            <View style={styles.buttonContainer}>
                                <Button label="Easy" func={() => play(8, 8, 8)} />
                                <Button label="Medium" func={() => play(16, 16, 16)} />
                                <Button label="Hard" func={() => play(32, 32, 32)} />
                                <Button label="Back" func={() => modalOff()} theme="back-button" />
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </>
    )

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

const TitleImage = require('../assets/mm.png')

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
        top: 25,
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
        width: 50,
        height: 50
        // width: wp('100%'),
        // height: hp('30%'),
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

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#C0C0C0',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

export default MainMenu;
