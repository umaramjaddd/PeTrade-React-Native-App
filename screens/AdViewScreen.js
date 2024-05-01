import React from 'react';
import { View, Text } from 'react-native';

const AdViewScreen = ({ route }) => {
  const { adId } = route.params;

  // Fetch ad from the database based on adId

  return (
    <View>
      {/* Display ad information */}
      <Text>Ad View</Text>
      <Text>Ad Id: {adId}</Text>
      {/* Display ad details */}
    </View>
  );
};

export default AdViewScreen;
