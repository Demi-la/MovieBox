import { Box, Image, Text, Flex, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mobileLogo from '../assets/mobileLogo.svg';
import home from '../assets/home.svg';
import movies from '../assets/movies.svg';
import series from '../assets/series.svg';
import upcoming from '../assets/upcoming.svg';
import logout from '../assets/logout.svg';

function MovieDetails() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=43c1cca3df9cf881cd13dcab89304620`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('No Network');
        }
        return response.json();
      })
      .then(data => {
        setMovieDetails(data);
      })
      // .catch(error => {
      //   console.error('Error fetching data:', error);
      // });
      .catch(error => {
        setError('Error fetching data: ' + error.message);
      });
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  const { poster_path, title, release_date, overview, runtime } = movieDetails;
  const utcReleaseDate = new Date(release_date)
    .toUTCString()
    .replace('GMT', 'UTC');

  return (
    <>
      <Box
        fontFamily={"'Poppins', sans-serif"}
        height={'100%'}
        overflow={'hidden'}
      >
        <Flex gap={'5rem'}>
          <Box
            width={'15%'}
            height={'100%'}
            border={'1px solid rgba(0, 0, 0, 0.30)'}
            borderRightRadius={'2.8125rem'}
            display={{ base: 'none', lg: 'block' }}
          >
            <Image
              src={mobileLogo}
              alt="logo"
              w={'10rem'}
              ml={'1rem'}
              mt={'2rem'}
            />
            <Flex
              fontSize={'1.25rem'}
              fontWeight={600}
              color={'#666'}
              fontFamily={''}
              flexDir={'column'}
              justifyContent={'center'}
              ml={'1rem'}
              gap={'5.12rem'}
            >
              <Flex mt={'6.56rem'} gap={'0.5rem'}>
                <Image src={home} alt="home" />
                <Text>Home</Text>
              </Flex>
              <Flex
                gap={'0.5rem'}
                backgroundColor={' rgba(190, 18, 60, 0.10)'}
                ml={'-1rem'}
                h={'5.375rem'}
                borderRight={'6px solid #BE123C'}
              >
                <Image src={movies} alt="movies" ml={'1rem'} />
                <Text mt={'1.9rem'}>Movies</Text>
              </Flex>
              <Flex gap={'0.5rem'}>
                <Image src={series} alt="TV Series" />
                <Text>TV Series</Text>
              </Flex>
              <Flex gap={'0.5rem'}>
                <Image src={upcoming} alt="upcoming" />
                <Text>Upcoming</Text>
              </Flex>
              <Box
                border={'1px solid rgba(190, 18, 60, 0.70)'}
                backgroundColor={'rgba(248, 231, 235, 0.40)'}
                borderRadius={'1.25rem'}
                w={'10.625rem'}
                h={'13.125rem'}
                p={'1rem'}
                ml={'-0.2rem'}
                mr={'1rem'}
              >
                <Text
                  fontSize={'0.9375rem'}
                  fontWeight={600}
                  color={'rgba(51, 51, 51, 0.80)'}
                  w={'8.5625rem'}
                  mt={'1.5rem'}
                >
                  Play movie quizes and earn free tickets
                </Text>
                <Text
                  fontSize={'0.75rem'}
                  fontWeight={500}
                  mt={'0.56rem'}
                  w={'8.6875rem'}
                >
                  50k people are playing now
                </Text>
                <Button
                  w={'7rem'}
                  h={'1.875rem'}
                  backgroundColor={' rgba(190, 18, 60, 0.20)'}
                  borderRadius={'1.875rem'}
                  fontSize={'0.75rem'}
                  fontWeight={500}
                  color={'#BE123C'}
                  mt={'0.5rem'}
                >
                  Start playing
                </Button>
              </Box>

              <Flex gap={'0.5rem'} mb={'2rem'}>
                <Image src={logout} alt="logout" />
                <Text>Log Out</Text>
              </Flex>
            </Flex>
          </Box>

          <Box
            height={'100%'}
            mt={'2rem'}
            w={{ base: '90%', lg: '90%' }}
            fontSize={'1.25rem'}
            fontWeight={'400'}
            color={' #333'}
            m={{ base: 'auto', lg: '0' }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="favorites"
              height={'28rem'}
              width={{ base: '100%', lg: '90%' }}
              borderRadius={{ base: '0', lg: '1.25rem' }}
              data-testid="movie-poster"
            />
            <Text
              data-testid="movie-title"
              fontSize={'2rem'}
              fontWeight={'400'}
              mt={'1rem'}
            >
              {title}
            </Text>
            <Text data-testid="movie-release-date" mt={'1rem'}>
              {utcReleaseDate}
            </Text>
            <Text data-testid="movie-runtime" mt={'1rem'}>
              {runtime}
            </Text>

            <Text
              data-testid="movie-overview"
              mt={'1rem'}
              w={{ base: '100%', lg: '48rem' }}
            >
              {overview}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default MovieDetails;
