import { useEffect } from "react";
import { StyleSheet, Text, BackHandler, FlatList, Image, View } from "react-native";

import { Background } from "../Components/Background";
import { Button } from "../Components/Button";
import prescriptions from "../prescriptions";

const getPrescription = (disease) => {
    return prescriptions[disease];
};

export function PrescriptionScreen(props) {
    const navigation = props.navigation;
    const disease = props.route.params.disease;
    const exit = props.route.params.exit;


    useEffect(() => {
        navigation.addListener('beforeRemove', e => e.preventDefault());
    }, []);

    const finish = () => {
       BackHandler.exitApp();
    }

    const prescription =  getPrescription(disease);

    return (
        <View style={styles.rootContainer}>
            <Image  
                    source={require('../../assets/2blk.png')}
                    style={{
                        width: 100,
                        height: 100,                      
                    }}
            />
            <Text style={styles.diseaseStyle}>Prescription for {disease}</Text>
            <FlatList
                style={{maxHeight: '30%', marginVertical: 10, width: '85%' }}
                contentContainerStyle={styles.prescriptionContainer}
                data={prescription} 
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (<Text style={styles.prescriptionStyle}>{item}</Text>)}
            />
            {   exit ? 
                <Button title='Exit App' onPress={finish} />
                :
                <Button 
                    title='Questions' 
                    onPress={() => navigation.navigate('General')}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    prescriptionContainer: {
        backgroundColor: '#EEEEFF',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    diseaseStyle: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: '#008080',
        // backgroundColor: '#3FB8A7',
        padding: 10,
        borderRadius: 50
    },
    prescriptionStyle: {
        fontSize: 18,
        fontFamily: 'monospace',
        textAlign: 'left',
        marginBottom: 5,
    }
});