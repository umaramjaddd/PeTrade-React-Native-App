import { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../AuthContext';

import { collection, query, where, onSnapshot } from "firebase/firestore";

import { firestore } from '../firebase';
import { FlatList } from 'react-native-gesture-handler';
import { Ad } from './Ad';

const MyAdsScreen = () => {
  const navigation = useNavigation();
  const auth = useContext(AuthContext);

  if (auth.user === null) return null;

  const [ads, setAds] = useState([]);

  useEffect(() => {
    const q = query(collection(firestore, "ads"), where("id", "==", auth.user.uid));
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Ads</Text>
       <FlatList
          renderItem={data => <Ad vertical={true} data={data.item} />}
          data={ads} 
          keyExtractor={(item => item.image)}
          contentContainerStyle={{ alignItems: 'center'}}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 36
  }
});

export default MyAdsScreen;
