import {
  Box,
  Flex,
  Link,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon, SunIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';
import { IconButton, SimpleGrid } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
          {/* <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme='blue'
            variant='solid'
            size='sm'
            mr='4'
          > 
            Contact{' '}
          </Button>*/}
          <Link href='https://github.com/buhama' isExternal pr={2}>
            <IconButton
              size='sm'
              aria-label='Github Link'
              icon={<FaGithub />}
            />
          </Link>
          <Link href='https://twitter.com/hassanahmed_ca' isExternal pr={2}>
            <IconButton
              size='sm'
              aria-label='Twitter Link'
              icon={<FaTwitter />}
            />
          </Link>
          <Link
            href='https://www.linkedin.com/in/hassan-ahmed-751255131/'
            isExternal
            pr={2}
          >
            <IconButton
              size='sm'
              aria-label='LinkedIn Link'
              icon={<FaLinkedin />}
            />
          </Link>
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
