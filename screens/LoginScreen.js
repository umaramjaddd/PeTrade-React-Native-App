import { signInWithEmailAndPassword } from 'firebase/auth';
import {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ActivityIndicator } from 'react-native';

import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


  const handleLogin = () => {
    if (loading) return;
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
    .catch(error => alert(error))
    .finally(() => setLoading(false));
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/2blk.png')} />
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={text => setEmail(text)} keyboardType='email-address' />
      <TextInput style={styles.input} placeholder="Password" onChangeText={text => setPassword(text)} secureTextEntry/>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        {
        loading ? <ActivityIndicator size='small' /> :
        <Text style={styles.buttonText}>Login</Text>
        }
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignup}>
        <Text style={styles.link}>Don't have an account? Signup here</Text>
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
  logo: {
    width: 150,
    height: 150,
    // marginBottom: 20,
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
  link: {
    color: '#008080',
    fontSize: 16,
    marginTop: 10,
  },
});

export default LoginScreen;
