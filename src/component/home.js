import React, { useState, useEffect } from 'react';
import Header from './header/header';
import { Box } from '@chakra-ui/react';
import MovieCard from './movieCard';
import Footer from './footer';

function Home() {
  const [moviesLists, setMoviesLists] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=43c1cca3df9cf881cd13dcab89304620`
    )
      .then(res => res.json())
      .then(json => setMoviesLists(json.results.slice(0, 10)))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=43c1cca3df9cf881cd13dcab89304620&query=${searchValue}`
        );
        const data = await response.json();
        const filterMovie = data.results.filter(movie =>
          movie.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setMoviesLists(filterMovie);
        console.log(filterMovie);
      } catch (error) {
        console.log(error);
      }
    };
    const timer = setTimeout(() => {
      if (searchValue) {
        searchMovies();
      } else {
        getMovie();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <>
      <Box>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />

        <MovieCard moviesLists={moviesLists} />

        <Footer />
      </Box>
    </>
  );
}

export default Home;
