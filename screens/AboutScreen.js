import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About PeTrade</Text>
      <Text style={styles.subtitle}>Empowering Online Exchange</Text>

      <View style={styles.section}>
        <Text style={styles.heading}>Founders</Text>
        <Text style={styles.text}>Muhammad Umar Amjad, 19101002-084</Text>
        <Text style={styles.text}>Haider Ali, 19101002-081</Text>
        <Text style={styles.text}>Muhammad Abubakar, 19101002-093</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>University</Text>
        <Text style={styles.text}>University of Sialkot</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Doctor Involved for Disease Diagnosis</Text>
        <Text style={styles.text}>Dr. Syed Usman Haider DVM, UVAS, LHR, RVMP, Pakistan, Directorate Of PRI, Rawalpindi</Text>
      </View>

      <Text style={styles.description}>
        Welcome to PeTrade, the brainchild of Muhammad Umar Amjad, Haider Ali, and Muhammad Abubakar, final year students from the University of Sialkot. PeTrade was born as an Online Exchange in 2023, and since then, it has evolved into a comprehensive platform that empowers users to buy, sell and exchange goods and services online.

        Our team is dedicated to delivering a seamless user experience, where you can easily navigate our app and access all of its features. We are passionate about providing an online marketplace that is secure, user-friendly, and accessible to everyone.

        At PeTrade, we understand the importance of health and well-being, and that's why we have collaborated with Dr. Syed Usman Haider, who is an experienced doctor and a specialist in disease diagnosis. Dr. Haider's expertise helps us ensure that our users have access to accurate information and resources related to health and wellness.
        </Text>

        <Text style={styles.heading}>Facility</Text>
        <Text style={styles.description}>
        Apart from only a marketplace, PeTrade also provides an option to check the disease of Chicken using picture of it's filth with the support of Artificial Intelligence.
        
        Thank you for choosing PeTrade, and we hope you enjoy our app.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Arial',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Helvetica',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    fontFamily: 'Roboto',
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Helvetica',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Roboto',
  },
});

export default AboutScreen;
