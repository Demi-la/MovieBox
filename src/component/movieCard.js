import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';

const MovieCard = props => {
  const [favoritesMap, setFavoritesMap] = useState({});

  const toggleFavorite = movieId => {
    const newFavoritesMap = { ...favoritesMap };
    newFavoritesMap[movieId] = !newFavoritesMap[movieId];
    setFavoritesMap(newFavoritesMap);
  };
  return (
    <>
      <Box position={'relative'}>
        <Flex justify={'space-between'}>
          <Text
            fontSize={{ base: '1.25rem', lg: '2.25rem' }}
            fontWeight={700}
            ml={{ base: '1rem', lg: '6rem' }}
            mt={{ base: '1rem', lg: '0rem' }}
          >
            Featured Movie
          </Text>
          <Flex
            fontSize={'1.125rem'}
            fontWeight={400}
            color={'var(--rose-700, #BE123C)'}
            mt={'1rem'}
            mr={{ base: '1rem', lg: '6rem' }}
            gap={'0.5rem'}
          >
            <Text>See more</Text>
            <Box mt={'3px'}>
              <IoIosArrowForward fontSize={'1.25rem'} />
            </Box>
          </Flex>
        </Flex>

        <Grid
          gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr 1fr 1fr' }}
          ml={{ base: 'auto', lg: '6rem' }}
          mt={'2rem'}
          position={'relative'}
          rowGap={{ base: '1rem', lg: '4rem' }}
          w={{ base: '85%', lg: '90%' }}
        >
          {props?.moviesLists?.map((movie, id) => {
            const isFavorite = favoritesMap[movie.id];

            return (
              <Box key={id}>
                <Box
                  data-testid="movie-card"
                  height={'28.625rem'}
                  width={'15.625rem'}
                  position={'relative'}
                >
                  <Link to={`/movies/${movie.id}`}>
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                      alt="postal"
                      height={'23.125rem'}
                      width={'15.625rem'}
                      data-testid="movie-poster"
                    />
                  </Link>
                  <Box
                    onClick={() => toggleFavorite(movie.id)}
                    cursor="pointer"
                    left={'12rem'}
                    position={'absolute'}
                    top={'1rem'}
                    background={'rgba(243, 244, 246, 0.50)'}
                    height={'1.82569rem'}
                    borderRadius={'50%'}
                    w={'1.875rem'}
                  >
                    {isFavorite ? (
                      <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        mt={'5px'}
                      >
                        <AiFillHeart color="red" fontSize={'1.2rem'} />
                      </Box>
                    ) : (
                      <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        mt={'5px'}
                      >
                        <AiFillHeart
                          color="hsla(216, 12%, 84%, 1)"
                          fontSize={'1.2rem'}
                        />
                      </Box>
                    )}
                  </Box>
                  <Box position={'absolute'} bottom={'2rem'}>
                    <Text
                      data-testid="movie-title"
                      fontSize={'1.125rem'}
                      fontWeight={'700'}
                      color={' var(--gray-900, #111827)'}
                    >
                      {movie?.title}
                    </Text>
                    <Text
                      data-testid="movie-release-date"
                      fontSize={'0.75rem'}
                      fontWeight={'700'}
                      color={' var(--gray-400, #9CA3AF)'}
                    >
                      {movie?.release_date}
                    </Text>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default MovieCard;
