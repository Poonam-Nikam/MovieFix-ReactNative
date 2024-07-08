import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, useColorScheme, Dimensions } from 'react-native';
import axios from 'axios';
import Navbar from './Navbar';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  genres?: { id: number; name: string }[];
  credits?: {
    cast: { id: number; name: string; character: string }[];
    crew: { job: string; name: string }[];
  };
};

type HomeProps = {
  navigation: any; // Adjust as per your navigation requirements
};

const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_MARGIN = 8;
const CARD_WIDTH = (SCREEN_WIDTH - CARD_MARGIN * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentYear, setCurrentYear] = useState<number>(2012);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetchMovies(currentYear, selectedGenre, searchQuery);
  }, [currentYear, selectedGenre, searchQuery]);

  const fetchMovies = async (year: number, genreId: number | null, query?: string) => {
    try {
      setLoading(true);
      const genreParam = genreId ? `&with_genres=${genreId}` : '';
      const searchParam = query ? `&query=${encodeURIComponent(query)}` : '';
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100${genreParam}${searchParam}&append_to_response=credits`
      );

      const formattedMovies: Movie[] = response.data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        overview: movie.overview,
        release_date: movie.release_date,
        genres: movie.genres, // Include the genres array
        credits: movie.credits, // Include the entire credits object
      }));

      setMovies(formattedMovies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreMovies = (direction: 'up' | 'down') => {
    if (!loading) {
      if (direction === 'up' && currentYear > 2012) {
        setCurrentYear(currentYear - 1);
      } else if (direction === 'down' && currentYear < new Date().getFullYear()) {
        setCurrentYear(currentYear + 1);
      }
    }
  };

  const handleScroll = (event: any) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const paddingToLoadMore = 20;

    if (contentOffset.y + layoutMeasurement.height + paddingToLoadMore >= contentSize.height) {
      loadMoreMovies('down');
    } else if (contentOffset.y <= paddingToLoadMore) {
      loadMoreMovies('up');
    }
  };

  const handleGenreSelect = (genreId: number) => {
    setSelectedGenre(genreId);
    setCurrentYear(2012); // Reset the year to 2012 when a new genre is selected
    setMovies([]); // Clear the current movie list
    setSearchQuery(''); // Reset search query when changing genres
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar onGenreSelect={handleGenreSelect} onSearch={handleSearch} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >

        {!loading && movies.length === 0 && <Text style={styles.noResultsText}>No movies found.</Text>}
        <View style={styles.moviesContainer}>
          {movies.map((movie) => (
            <View key={movie.id} style={[styles.card, { width: CARD_WIDTH }]}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={styles.image}
              />
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.releaseYear}>Year: {movie.release_date.slice(0, 4)}</Text>
              {movie.genres && (
                <Text style={styles.genres}>
                  Genres: {movie.genres.map((genre) => genre.name).join(', ')}
                </Text>
              )}
              {movie.credits && movie.credits.cast && (
                <Text style={styles.cast}>
                  Cast: {movie.credits.cast.slice(0, 3).map((cast) => cast.name).join(', ')}
                </Text>
              )}
              <Text style={styles.overview}>{movie.overview}</Text>
              <Text style={styles.rating}>Rating: {movie.vote_average}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingIndicator: {
    marginTop: 20,
  },
  noResultsText: {
    marginTop: 20,
    textAlign: 'center',
  },
  moviesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: CARD_MARGIN,
    marginTop: 130,
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
  releaseYear: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 8,
  },
  genres: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 8,
  },
  cast: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 8,
  },
  overview: {
    fontSize: 14,
    marginHorizontal: 8,
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 8,
  },
});

export default Home;
