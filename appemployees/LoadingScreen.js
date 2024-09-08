// LoadingScreen.js
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'; // Import necessary components

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" /> {/* Spinner for loading */}
      <Text style={styles.text}>Loading...</Text> {/* Loading text */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background color
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: '#000000', // Text color
  },
});

export default LoadingScreen;
