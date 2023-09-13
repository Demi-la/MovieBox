import { Text, Flex, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';

function Footer() {
  return (
    <>
      <Flex
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        mt={{ base: '2rem', lg: '9rem' }}
      >
        <Flex gap={'3rem'} fontSize={'2rem'}>
          <FaFacebookSquare />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiFillYoutube />
        </Flex>

        <List
          display={'flex'}
          gap={{ base: '1rem', lg: '3rem' }}
          mt={'2.25rem'}
          fontSize={{ base: '1rem', lg: '1.125rem' }}
          fontWeight={{ base: '600', lg: '700' }}
          color={'var(--gray-900, #111827);'}
        >
          <ListItem>Conditions of Use</ListItem>
          <ListItem>Privacy & Policy</ListItem>
          <ListItem>Press Room</ListItem>
        </List>

        <Text
          fontSize={{ base: '1rem', lg: '1.125rem' }}
          fontWeight={{ base: '600', lg: '700' }}
          color={'var(--gray-500, #6B7280)'}
          mt={'2.25rem'}
        >
          © 2021 MovieBox by Adriana Eka Prayudha
        </Text>
      </Flex>
    </>
  );
}

export default Footer;
