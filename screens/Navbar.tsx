import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import SearchBar from '../components/SearchBar';

type Genre = {
  id: number;
  name: string;
};

type NavbarProps = {
  onGenreSelect: (genreId: number) => void;
  onSearch: (searchQuery: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onGenreSelect, onSearch }) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Initially set to true

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=2dca580c2a14b55200e784d157207b4d&language=en-US'
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      } finally {
        setLoading(false); // Set loading to false whether successful or not
      }
    };

    fetchGenres();
  }, []);

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>MOVIEFIX</Text>
        {loading ? (
          <ActivityIndicator size="small" color="#000" style={styles.loadingIndicator} />
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuBar}>
            {genres.map((genre) => (
              <TouchableOpacity key={genre.id} onPress={() => onGenreSelect(genre.id)}>
                <Text style={styles.menuItem}>{genre.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
        <SearchBar onSearch={onSearch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  navbar: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
  },
  navbarTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  menuBar: {
    marginTop: 10,
    width: '100%',
  },
  menuItem: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  loadingIndicator: {
    marginLeft: 10,
  },
});

export default Navbar;
