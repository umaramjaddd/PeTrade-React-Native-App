import {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; 

import { firestore, auth } from '../firebase';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    if (loading) return;
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      return updateProfile(user, {displayName: name});
    })
    .then(value => {
      return setDoc(doc(firestore, "users", auth.currentUser.uid), {
        mobileNumber: mobileNumber
      });
    })
    .catch(error => alert(error))
    .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
     <Image style={styles.logo} source={require('../assets/2blk.png')} />
      <Text style={styles.title}>Signup</Text>
      <TextInput style={styles.input} placeholder="Name" onChangeText={text => setName(text)}/>
      <TextInput style={styles.input} keyboardType='email-address' placeholder="Email" onChangeText={text => setEmail(text)}/>
      <TextInput style={styles.input} keyboardType='phone-pad'  placeholder="Mobile Number" onChangeText={text => setMobileNumber(text)}/>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={text => setPassword(text)}/>
      <TouchableOpacity style={styles.button} onPress={handleSignup} >
      { loading ? <ActivityIndicator size='small'/> :
        <Text style={styles.buttonText}>Signup</Text>
      }
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
  logo: {
    width: 150,
    height: 150,
    // marginBottom: 20,
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
  orText: {
    marginVertical: 10,
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#008080',
    fontSize: 16,
  },
});

export default SignupScreen;
