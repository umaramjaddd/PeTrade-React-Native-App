import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountScreen = ({ route }) => {
  const { name, email, mobileNumber } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Information</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Name:</Text>
        <Text style={styles.infoValue}>{name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>{email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Mobile Number:</Text>
        <Text style={styles.infoValue}>{mobileNumber}</Text>
      </View>
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
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 18,
  },
  infoValue: {
    fontSize: 18,
  },
});

export default AccountScreen;
