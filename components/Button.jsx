import { StyleSheet, View, Pressable, Text } from "react-native";
import PropTypes from 'prop-types';

const Button = ({ label, func, theme }) => {
    if (theme === "back-button")
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={{ textDecorationLine: "underline" }} onPress={func}>
                    <Text>{label}</Text>
                </Pressable>
            </View>
        )

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={func}>
                <Text>{label}</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        width: "75%",
        backgroundColor: '#9AE19D',
        textAlign: 'center',
        padding: 10,
        margin: 3,
        alignItems: "center"
    }
})

Button.propTypes = {
    label: PropTypes.string,
    func: PropTypes.func,
    theme: PropTypes.string
}

export default Button;

