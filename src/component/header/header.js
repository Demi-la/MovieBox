import React from 'react';
import Nav from '../navbar/nav';
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  List,
  ListItem,
} from '@chakra-ui/react';
import Poster from '../../assets/Poster.png';
import imdb from '../../assets/imdb.svg';
import strawberry from '../../assets/strawberry.svg';
import play from '../../assets/play.svg';
import rectangle from '../../assets/rectangle.svg';

function Header({ searchValue, setSearchValue }) {
  return (
    <>
      <Box>
        <Box
          backgroundImage={` url(${Poster})`}
          backgroundRepeat={'no-repeat'}
          backgroundSize={{ base: 'cover', lg: 'contain' }}
          width={'100%'}
          height={{ base: '30rem', lg: '40rem' }}
          color={'white'}
        >
          <Nav searchValue={searchValue} setSearchValue={setSearchValue} />

          <Flex
            ml={{ base: '1rem', lg: '6rem' }}
            mt={{ base: '2rem', lg: '5.5rem' }}
            gap={'62%'}
          >
            <Box>
              <Text
                fontSize={{ base: '2rem', lg: '3rem' }}
                fontWeight={700}
                color={'white'}
                width={{ base: '23rem', lg: '25.25rem' }}
                lineHeight={'3.5rem'}
              >
                John Wick 3 : Parabellum
              </Text>
              <Flex
                gap={'2rem'}
                fontSize={'0.75rem'}
                fontWeight={400}
                mt={'1.16rem'}
              >
                <Flex gap={'1rem'}>
                  <Image src={imdb} alt="imdb logo" />
                  <Text>86.0 / 100</Text>
                </Flex>
                <Flex gap={'1rem'}>
                  <Image src={strawberry} alt="strawberry" />
                  <Text>97%</Text>
                </Flex>
              </Flex>
              <Text
                fontSize={'0.875rem'}
                fontWeight={500}
                color={'white'}
                width={'18.875rem'}
                mt={'1.16rem'}
              >
                John Wick is on the run after killing a member of the
                international assassins' guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </Text>
              <Button
                backgroundColor={'hsla(345, 83%, 41%, 1)'}
                width={'10.5rem'}
                height={'2.25rem'}
                mt={'1.16rem'}
              >
                <Flex gap={'0.5rem'}>
                  <Image
                    src={play}
                    alt="imdb logo"
                    width={'1.25rem'}
                    height={'1.25rem'}
                  />
                  <Text
                    fontSize={'0.875rem'}
                    fontWeight={700}
                    color={'white'}
                    textTransform={'uppercase'}
                    mt={'2px'}
                  >
                    {' '}
                    Watch trailer
                  </Text>
                </Flex>
              </Button>
            </Box>
            <Box>
              <List
                mt={'5rem'}
                color={'var(--gray-400, #9CA3AF)'}
                fontSize={'0.75rem'}
                fontWeight={'700'}
                display={{ base: 'none', lg: 'block' }}
              >
                <ListItem ml={'1.8rem'}>1</ListItem>
                <ListItem ml={'1.8rem'}>2</ListItem>
                <ListItem color={'white'} fontSize={'1rem'} fontWeight={'700'}>
                  <Flex gap={'0.5rem'}>
                    <Image src={rectangle} alt="" />
                    <Text>3</Text>
                  </Flex>
                </ListItem>
                <ListItem ml={'1.8rem'}>4</ListItem>
                <ListItem ml={'1.8rem'}>5</ListItem>
              </List>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Header;
