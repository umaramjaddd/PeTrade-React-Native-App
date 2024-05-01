import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

export function BackButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <FontAwesome5 name="chevron-left" size={30} color="black" />
            <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    text: {
        fontSize: 20,
        marginLeft: 10
    }
});