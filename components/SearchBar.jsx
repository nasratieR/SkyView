import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Image } from 'react-native';
import MeteoView from './MeteoView';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleInputChange = (text) => {
    setSearchTerm(text);
  };

  const handleSubmit = () => {
    const result = onSearch(searchTerm);
    setSearchResult(result);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="ville"
          onChangeText={handleInputChange}
        />
        <Button style={styles.boutton} title="Chercher"  onPress={handleSubmit} />
        <View style={styles.imageContainer}>
          <Image source={require('../assets/pngtree-location.png')} style={styles.image} />
        </View>

      </View>
      <MeteoView text={searchResult}/>
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
  boutton : {
    color: '#fff',
    backgroundColor: "CCC",
  }
});

export default SearchBar;
