import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function Button(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 170,
        height: 50,
        backgroundColor: '#3FB8A7',
        opacity: 0.9,
        borderRadius: 30
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
    }
});