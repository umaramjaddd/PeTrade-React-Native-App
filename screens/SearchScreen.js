import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../AuthContext';
import { Picker } from '@react-native-picker/picker';

import { collection, query, where, onSnapshot, Query } from "firebase/firestore";

import { firestore } from '../firebase';
import { FlatList } from 'react-native-gesture-handler';
import { Ad } from './Ad';

const SearchScreen = (props) => {
  const navigation = useNavigation();
  const auth = useContext(AuthContext);

  if (auth.user === null) return null;

  const [ads, setAds] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const q = query(collection(firestore, "ads"), where("id", "!=", auth.user.uid));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedAds = [];
      querySnapshot.forEach((doc) => {
          fetchedAds.push(doc.data());
      });

      setAds(fetchedAds);
    } 
    );
    return unsubscribe;

  }, []);

  const filteredData = category === 'All' ? ads : ads.filter(value => value.category === category);

  return (
    <View style={styles.container}>
      <View style={{width: 200, marginTop: 20}}>
        <Text style={{textAlign: 'center', color: 'red', fontSize: 18}}>Filter</Text>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => {
            setCategory(itemValue);
          }}
        >
          <Picker.Item label="All" value="All" />
          <Picker.Item label="Cat" value="Cat" />
          <Picker.Item label="Dog" value="Dog" />
          <Picker.Item label="Bird" value="Bird" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>
       <FlatList
          horizontal
          renderItem={data => <Ad data={data.item} navigation={props.navigation}/>}
          data={filteredData} 
          keyExtractor={(item => item.image)}
          contentContainerStyle={{ alignItems: 'center'}}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default SearchScreen;
