import { View, StyleSheet, Text } from 'react-native';

import { CheckBox } from "@rneui/base";

export function Question(props) {
    const question = props.data.question;
    const options = props.data.options;

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.question}> {question} </Text>
            {
                options.map((value, index) => {
                    return (
                        <CheckBox
                            checked={props.selectedIndex === index}
                            onPress={() => props.onPress(index)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            title={value}
                            key={index}
                        />
                    );
                })
            }
        </View>
    );

}

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: 'center',
    },
    question: {
        fontSize: 20,
        marginHorizontal: 20,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})