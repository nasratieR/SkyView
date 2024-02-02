import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Image } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (text) => {
    setSearchTerm(text);
  };

  const handleSubmit = () => {
    // Appeler la fonction de recherche fournie par le composant parent
    onSearch(searchTerm);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="ville"
          onChangeText={handleInputChange}
        />
        <Button title="Chercher" mode="contained" onPress={handleSubmit} />
        <View style={styles.imageContainer}>
          <Image source={require('../assets/pngtree-location.png')} style={styles.image} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    paddingLeft : 30,
    padding: 10,
    borderRadius: 50,
    width: 200,
  },
  imageContainer: {
    marginLeft: 10,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default SearchBar;
