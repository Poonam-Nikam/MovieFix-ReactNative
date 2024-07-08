import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';

type SearcherProps = {
  onSearch: (searchQuery: string) => void;
};

const SearchBar: React.FC<SearcherProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = () => {
    onSearch(searchText.trim()); // Trim whitespace and trigger search
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search movies..."
        placeholderTextColor="#aaa" // Adjust placeholder color if needed
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch} // Trigger search on enter press
        textAlignVertical="center" // Center vertically
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 10,
    textAlignVertical: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default SearchBar;
