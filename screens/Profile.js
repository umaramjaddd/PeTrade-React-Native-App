import { getAuth, updateProfile } from 'firebase/auth';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { extractExt, uploadImage } from '../util';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { ActivityIndicator } from 'react-native';


const ProfileScreen = () => {
  const auth = useContext(AuthContext);
  const user = auth.user;

  const [uri, setUri] = useState(user.photoURL);

  const changeImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });
  
    if (!result.canceled) {

      const uri = result.assets[0].uri;
      const fname = user.uid + '.' + extractExt(uri);

      uploadImage(uri, 'pfps', fname).then((value) => {
        updateProfile(user, {photoURL: value.url});
        setUri(value.url);
     })
     .catch((reason) => {
        console.error(reason);
     })
    }
  }


  return (
    <View style={styles.container}>
        <View style={styles.header}></View>
        {
          uri ?  <Image source={{uri: uri}} style={styles.avatar}/> :
          <MaterialIcons name='person' color='white' size={100} style={styles.avatar}/>
        }
        <View style={styles.body}>
          <Text style={styles.name}>{user.displayName}</Text>
          <Text style={styles.name}>{auth.data.mobileNumber}</Text>
          <View style={styles.bodyContent}>            
            <TouchableOpacity style={styles.buttonContainer} onPress={changeImage}>
              <Text>Change Image</Text>  
            </TouchableOpacity>              
          </View>
      </View>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#4BC500',
    height:200,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color: 'black',
    fontWeight:'bold',
    textAlign: 'center',
    fontSize: 24
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: '#4BC500'
  },
});