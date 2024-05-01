import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

import { 
        launchImageLibraryAsync, 
        launchCameraAsync, 
        MediaTypeOptions,
        ImagePickerOptions 
    } from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { readAsStringAsync, EncodingType } from 'expo-file-system';

import { Background } from '../Components/Background';
import { Button } from '../Components/Button';


function UploadText() {
    const text = 'Upload an image of your bird\'s filth from files or capture from camera.\n\n' +
                 'The image will be used to further access the condition.';

    return (
        <View style={styles.uploadTextContainer}>
            <Text style={styles.uploadText}>{text}</Text>
        </View>
    );
}

function Icons(props) {
    const size = 60;
    const color = 'black';

    const selectImageFromDevice = async () => {
        await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            quality: 1.0
        })
        .then((value) => props.setImage(value.assets[0]))
        .catch((reason) => console.log(reason));
    }

   const selectImageFromCamera = async () => {
        await launchCameraAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
        })
        .then((value) => props.setImage(value.assets[0]))
        .catch((reason) => console.log(reason));
   }

    return (
        
        <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={selectImageFromDevice}>
                <MaterialCommunityIcons 
                    name="file-image-plus-outline" 
                    size={size} color={color}    
                />
            </TouchableOpacity>
             <TouchableOpacity onPress={selectImageFromCamera}>
                <MaterialCommunityIcons 
                    name="camera-outline" 
                    size={size} color={color}    
                />
            </TouchableOpacity> 
        </View>
    );
}


export function UploadScreen(props) {
    const [image, setImage] = useState(null);
    let base64 = '';
    
    useEffect(() => {
        if (image !== null) {
            readAsStringAsync(image.uri, {encoding: EncodingType.Base64, length: 50})
            .then(value => base64 = value)
            .catch(error => alert(error));
        }

    }, [image]);


    const navigation = props.navigation;

    const func = () => {
        navigation.navigate('Diagnosis', {exit: false, image: base64 })
    }


    return (
        <View style={styles.container}>
            {   image === null ?
                <UploadText /> : 
                <Image 
                    source={{uri: image.uri}}
                    style={{width: 150, height: 150}}
                />
            }
            <Icons setImage={setImage} />
            {image && 
                <Button 
                    title='Checkit ✔️' 
                    onPress={func}    
                />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        
    },
    logo: {
        height: 150, 
        width: 150, 
        resizeMode: 'contain',
    },
    text: {
        fontSize: 20,
        fontStyle: 'italic'
    },
    uploadTextContainer: {
        marginTop: 100,
        justifyContent: 'center',
        backgroundColor: '#008080',
        opacity: 0.8,
        width: '70%',
        padding: 10
    },
    uploadText: {
        textAlign: 'left',
        fontSize:19,
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        width: 200,
        justifyContent: 'space-evenly',
    }
});
