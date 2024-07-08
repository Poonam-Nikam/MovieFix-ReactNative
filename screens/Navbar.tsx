import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

type Genre = {
  id: number;
  name: string;
};

type NavbarProps = {
  onGenreSelect: (genreId: number) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onGenreSelect }) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=2dca580c2a14b55200e784d157207b4d&language=en-US'
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>MOVIEFIX</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.menuBar}>
        {genres.map((genre) => (
          <TouchableOpacity key={genre.id} onPress={() => onGenreSelect(genre.id)}>
            <Text style={styles.menuItem}>{genre.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Navbar;
