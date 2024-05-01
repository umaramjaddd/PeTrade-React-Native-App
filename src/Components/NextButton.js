import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

export function NextButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.text}>Next</Text>
            <FontAwesome5 name="chevron-right" size={30} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    text: {
        fontSize: 20,
        marginRight: 10
    }
});