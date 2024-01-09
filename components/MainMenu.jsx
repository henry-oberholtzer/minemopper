import { useState } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from './Button';


const MainMenu = () => {
    const [view, setView] = useState(0);

    const pregame = () => {
        setView(1);
    };

    const exit = () => {
        setView(0);
    };

    let currentView;

    if (!view) {
        currentView = (
            <>
                <View>
                    <Button label="Start Game" func={pregame} />
                    <Button label="Resume Game" />
                    <Button label="View Leaderboard" />
                </View>
            </>
        );
    } else {
        currentView = (
            <View>
                <Button label="Back" func={exit} theme="back-button" />
                <Button label="Difficulty" />
                <Button label="Oops mode?" />
            </View>
        );
    }

    return (
        <>
            <View style={styles.headerStyle}></View>
            <View>
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
        height: 50,
        width: "100%",
        backgroundColor: '#E39600',
        position: "absolute",
        top: 0
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
    image: {
        width: wp('90%'),
        height: hp('40%'),
    }
});

export default MainMenu;