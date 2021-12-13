import { Box, Flex, Link, Spacer, useColorMode } from '@chakra-ui/react';
import { ArrowForwardIcon, SunIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';

import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className='header'>
      <Flex>
        <div className='logo'>
          <Link as={RouterLink} to='/' style={{ textDecoration: 'none' }}>
            Hassan Ahmed
          </Link>
        </div>
        <Spacer />
        <div className='nav-links'>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme='blue'
            variant='solid'
            size='sm'
            mr='4'
          >
            Contact{' '}
          </Button>
          <Button
            onClick={toggleColorMode}
            rightIcon={<SunIcon />}
            colorScheme='gray'
            variant='solid'
            size='sm'
          >
            Change Theme
          </Button>
        </div>
      </Flex>
    </div>
  );
};

export default Header;
