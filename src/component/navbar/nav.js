import {
  Flex,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  HStack,
  Text,
  Collapse,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { BiSearch } from 'react-icons/bi';
import menu from '../../assets/menu.svg';

function Nav({ searchValue, setSearchValue }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchInput = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
      <Flex
        justifyContent={'space-around'}
        w={'100%'}
        position={'relative'}
        top={'1.75rem'}
        color={'white'}
      >
        <Image src={logo} alt="logo" />
        <InputGroup width={'32.8125rem'} display={{ base: 'none', lg: 'flex' }}>
          <Input
            placeholder="What do you want to watch?"
            border={' 2px solid var(--gray-300, #D1D5DB)'}
            color={'white'}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
          <InputRightElement>
            <BiSearch fontSize={'1rem'} />
          </InputRightElement>
        </InputGroup>
        <HStack gap={'1.69rem'}>
          <Text fontSize={'1rem'} fontWeight={'700'}>
            Sign in
          </Text>
          <Image src={menu} alt="Menu bar" onClick={toggleSearchInput} />
        </HStack>
      </Flex>
      <Collapse
        in={isSearchVisible}
        animateOpacity
        display={{ base: 'block', lg: 'none' }}
      >
        <InputGroup
          width={isSearchVisible ? '20rem' : '0'}
          mt={'3rem'}
          ml={'auto'}
          mr={'auto'}
        >
          <Input
            placeholder="What do you want to watch?"
            border={' 2px solid var(--gray-300, #D1D5DB)'}
            color={'white'}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
          <InputRightElement>
            <BiSearch fontSize={'1rem'} />
          </InputRightElement>
        </InputGroup>
      </Collapse>
    </>
  );
}

export default Nav;
