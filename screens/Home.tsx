import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, useColorScheme, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import Navbar from './Navbar';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type RootStackParamList = {
  Home: undefined;
  Horror: undefined;
  Action: undefined;
  SciFi: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_MARGIN = 8;
const CARD_WIDTH = (SCREEN_WIDTH - CARD_MARGIN * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

const HomeScreen: React.FC<HomeProps> = ({ navigation }): React.ReactElement => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=2023&page=1&vote_count.gte=100'
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
      
      <View style={styles.container}>
        {movies.map((movie) => (
          <View key={movie.id} style={[styles.card, { width: CARD_WIDTH }]}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
              style={styles.image}
            />
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.rating}>Rating: {movie.vote_average}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: CARD_MARGIN,
  },
  card: {
    marginBottom: CARD_MARGIN,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
  },
  rating: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 8,
  },
});

export default HomeScreen;
