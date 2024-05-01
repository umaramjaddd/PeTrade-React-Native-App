import { View, StyleSheet, Text, Image } from 'react-native';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { BackButton } from '../Components/BackButton';
import { NextButton } from '../Components/NextButton';
import { Question } from "../Components/Question";

import questions from "../questions";
import { store } from '../redux/store';

export function GeneralScreen(props) {
    let [questionNo, setQuestion] = useState(0);

    const totalQs = questions.length;
    const navigation = props.navigation;
    
    const setAnswer = (index) => {
        store.dispatch({
            type: 'set-answer',
             payload: {
                index: questionNo, 
                option: index
            }
        });
    }

    const nextButton = () => {
        if (questionNo < totalQs - 1) {
            setQuestion(++questionNo);
        }
        else {
            navigation.push('Diagnosis', {exit: true});
        }
    }

    const backButton = () => {
        if (questionNo > 0) {
            setQuestion(--questionNo);
        }
        else {
            navigation.goBack();
        }
    }

    const selectedIndex = useSelector(state => state.answers)[questionNo];

    return (
        <View style={styles.rootContainer}>
            <Image  
                    source={require('../../assets/2blk.png')}
                    style={{
                        width: 100,
                        height: 100,                      
                    }}
            />
            <View style={styles.questionContainer}>  
                <Text style={styles.questionNo}>Question {questionNo + 1} of {totalQs}</Text>
                <Question 
                    data={questions[questionNo]} 
                    selectedIndex={selectedIndex}
                    onPress={(index) => setAnswer(index)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <BackButton onPress={backButton} />
                <NextButton onPress={nextButton} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#b0deeb'
    },
    questionContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: 330,
        marginTop: 20
    },
    logo: {
        width: 100, 
        height: 100
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    questionNo: {
        marginLeft: 10,
        textAlign: 'left',
        fontSize: 18,
        fontWeight: '500',
        textDecorationLine: 'underline'
    }
})