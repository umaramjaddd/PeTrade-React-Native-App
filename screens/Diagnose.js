import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileData from './ProfileData';
// import CategoryPicker from './categories';

const DiagnoseScreen = () => {
  return (

<ProfileData />
//<CategoryPicker />

    // <View style={styles.container}>
    //   <Text style={styles.text}>This is Diagnosis Screen</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DiagnoseScreen;
