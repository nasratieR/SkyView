// MyTextView.jsx

import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const MeteoView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Me geolocaliser</Text>
      <Image source={require('../assets/pngtree-location.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: '#EEE', // Couleur de fond gris
    padding: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  text: {
    color: '#000000', // Couleur du texte noir
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop:10
  },
});

export default MeteoView;
