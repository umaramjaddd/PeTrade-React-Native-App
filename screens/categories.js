// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Picker } from 'react-native';

// const CategoryPicker = () => {
//   const [selectedCategory, setSelectedCategory] = useState('chicken');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Select a category:</Text>
//       <Picker
//         selectedValue={selectedCategory}
//         onValueChange={(itemValue, itemIndex) =>
//           setSelectedCategory(itemValue)
//         }
//       >
//         <Picker.Item label="Chicken" value="chicken" />
//         <Picker.Item label="Pigeon" value="pigeon" />
//         <Picker.Item label="Parrot" value="parrot" />
//         <Picker.Item label="Dog" value="dog" />
//         <Picker.Item label="Cat" value="cat" />
//       </Picker>
//       <Text style={styles.selectedCategory}>You selected: {selectedCategory}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   selectedCategory: {
//     fontSize: 16,
//     marginTop: 20,
//   },
// });

// export default CategoryPicker;
