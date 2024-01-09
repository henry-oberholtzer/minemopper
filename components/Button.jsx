import { StyleSheet, View, Pressable, Text } from "react-native";

const Button = ({ label, func, theme }) => {
    if (theme === "back-button")
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={{ textDecorationLine: "underline" }} onPress={() => func()}>
                    <Text>{label}</Text>
                </Pressable>
            </View>
        )

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => func()}>
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
        margin: 10,
        alignItems: "center"
    }
})

export default Button;

