import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadImage, extractExt } from '../util';
import { AuthContext } from '../AuthContext';
import uuid from 'react-native-uuid';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../firebase';
import Spinner from 'react-native-loading-spinner-overlay';
import {Picker} from '@react-native-picker/picker';

const AdUploadScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('cat');
  const [age, setAge] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const user = useContext(AuthContext);

  const changeImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const clearAll = () => {
    setTitle('');
    setCategory('');
    setAge('');
    setPrice('');
    setCity('');
    setImage(null);
  }

  const handleAdUpload = () => {
    if (image === '') {
      alert('Please upload Image!');
      return;
    }

    const uri = image.uri;
    const fname = uuid.v4() + '.' + extractExt(uri);

    const name = user.user.displayName;
    const id = user.user.uid;
    const phone = user.data.mobileNumber;

    setLoading(true);
    uploadImage(uri, 'ads', fname).then(({url}) => {
       addDoc(collection(firestore, "ads"), {
        id: id,
        name: name,
        phone: phone,
        title: title,
        category: category,
        age: Number(age),
        city: city,
        price: Number(price),
        image: url
      });
    })
    .then(value => clearAll())
    .catch(value => alert(value))
    .finally(() => setLoading(false));
  }

  return (
    <View style={styles.container}>
      <Spinner visible={loading} textContent='Uploading Image...' size='large'/>
      <Text style={styles.title}>Ad Upload</Text>
      <View style={{width: '80%'}}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => {
            setCategory(itemValue);
          }}
        >
          <Picker.Item label="Cat" value="Cat" />
          <Picker.Item label="Dog" value="Dog" />
          <Picker.Item label="Bird" value="Bird" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Age Of Pet"
        value={age}
        onChangeText={setAge}
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity style={styles.uploadButton} onPress={changeImage}>
              <Text>Upload Pet's Image</Text>  
            </TouchableOpacity>   
      <TouchableOpacity style={styles.button} onPress={handleAdUpload}>
        <Text style={styles.buttonText}>Upload Ad</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AdUploadScreen;
