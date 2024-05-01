import React from 'react';
import { View, Text } from 'react-native';

const SearchResultsScreen = ({ route }) => {
  const { searchQuery } = route.params;

  // Fetch ads from the database based on searchQuery

  return (
    <View>
      <Text>Search Results for "{searchQuery}"</Text>
      {/* Display ads that match the search query */}
    </View>
  );
};

export default SearchResultsScreen;
