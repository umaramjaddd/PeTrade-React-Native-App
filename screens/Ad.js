import { useContext } from 'react';
import { Image, View, StyleSheet, Text, Pressable } from 'react-native';
import { AuthContext } from '../AuthContext';
import { Button } from 'react-native';

import {query, collection, where, getDocs, deleteDoc} from 'firebase/firestore';
import {firestore} from '../firebase';

export function Ad({data, navigation, vertical}) {
    const auth = useContext(AuthContext);

    const deleteAd = async (id) => {

        const q = query(collection(firestore, "ads"), where("image", "==", id));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref);
        });
    }

    return(
        <View style={styles.rootContainer}>
            <Text style={styles.title} numberOfLines={1} >{data.title}</Text>
            <Pressable 
                onPress={vertical ? () => {} : () => navigation.navigate('AdDetail', {...data})}
            >
                <Image style={styles.image} source={{uri: data.image}} />
            </Pressable>

            {   vertical &&
                (
                <View style={{paddingTop: 10}}>
                    <Button title='delete' color='red' onPress={() => deleteAd(data.image)} /> 
                </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        width: 300,
        alignItems: 'center',
    },
    titleContainer: {

    },
    title: {
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
        width: 250,
        marginVertical: 10
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 20
    }
})