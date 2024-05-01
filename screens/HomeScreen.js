import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AdViewScreen from './AdViewScreen';
import SearchScreen from './SearchScreen';

const HomeScreen = ({ navigation }) => {
  const handleAdUpload = () => {
    navigation.navigate('AdUpload');
  };

  // const handleSearch = () => {
    // navigation.navigate('Search');
  // };

  return (
    <View style={styles.container}>
    {/* <AdViewScreen /> */}
    
      <Text style={styles.title}>Ad Feed</Text>
      <SearchScreen navigation={navigation}/>
     
      {/* <TouchableOpacity style={styles.button} onPress={handleSearch}> */}
        {/* <Text style={styles.buttonText}>Search Ads</Text> */}
      {/* </TouchableOpacity> */}
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
  }
});

export default HomeScreen;
