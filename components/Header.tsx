import {StyleSheet, Text, View} from "react-native";

export default function Header() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>LUCKYLUCK</Text>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: '5%'
    },
    text: {
        color: "black"
    }
});