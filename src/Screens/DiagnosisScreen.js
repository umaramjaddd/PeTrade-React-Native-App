import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Background } from "../Components/Background";

import Spinner from "react-native-loading-spinner-overlay/lib";

import { Button } from "../Components/Button";
import axios from "axios";
import { store } from "../redux/store";

const diagnosisResult = () => {
    const classnames = ['Typhoid', 'Cocci', 'ND', 'Healthy'];

    const answers = store.getState().answers;

    return classnames[Math.floor(Math.random() * 4)];
}

function Diagnosis(props) {
    const isText = 'Your diagnosis is:\n';
    const navigation = props.navigation;

    const params = {
        exit: props.route.params.exit,
        disease: props.type
    }

    return (
        <>
            <View style={styles.diagnosisContainer}>
                <Text style={styles.diagnosis}>
                    {isText}
                    <Text 
                        style={[styles.diagnosis, {color: 'red', fontWeight: 'bold'}]} 
                    >
                        {props.type}
                    </Text>
                </Text>
            </View>
            <Button title='Prescription' 
                onPress={() => 
                navigation.push('Prescription', params)}
            />
        </>
    );
}

export function DiagnosisScreen(props) {
    const [spinner, setSpinner] = useState(false);
    const [diagnosis, setDiagnosis] = useState('');

    const navigation = props.navigation;
    const exit = props.route.params.exit;
    const image = props.route.params.image;

    useEffect(() => {
        if (!exit) { 
            const baseURL = "http://haider151.pythonanywhere.com";

            setSpinner(true);
            axios.post(`${baseURL}/predict`, {image: image})
            .then(value => setDiagnosis(value.data.disease))
            .catch(error => alert(error))
            .finally(() => setSpinner(false));
        }
    }, []);

    useEffect(() => {
        navigation.addListener('beforeRemove', e => e.preventDefault());
    }, []);


    return (
        <View style={styles.container}>
        {/* <Background style={styles.rootContainer}> */}
            <Image  
                    source={require('../../assets/2blk.png')}
                    style={{
                        width: 150,
                        height: 150,
                        marginBottom:15,
                    }}
            />
            <Spinner 
                visible={spinner} 
                textContent='Diagnosing...' 
                size='large'
                color='#3FB8A7'  
                textStyle={styles.spinnerTextStyle}
            />

            {
                !spinner && (
                 <Diagnosis 
                    exit={exit} 
                    type={exit ? diagnosisResult() : diagnosis} 
                    navigation={props.navigation}
                    route={props.route}
                />
                )
            }
        {/* </Background> */}
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
    spinnerTextStyle: {
        color: 'white',
        fontSize: 24
    },
    diagnosisContainer: {
        justifyContent: 'center',
        backgroundColor: '#008080',
        // backgroundColor: '#3FB8A7',
        opacity: 0.8,
        width: '80%',
        padding: 10,
        marginBottom: 20
    },
    diagnosis: {
        textAlign: 'center',
        fontSize: 32,
    }
});