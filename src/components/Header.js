import {
  Flex,
  Link,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import FadeIn from 'react-fade-in/lib/FadeIn';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';
import { IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonColor = useColorModeValue('purple', 'green');
  const twitterColor = useColorModeValue('blue', 'blue');
  const githubColor = useColorModeValue('green', 'red');
  const linkedinColor = useColorModeValue('red', 'purple');
  var buttonText = 'Dark Mode';

  if (colorMode === 'dark') {
    buttonText = 'Light Mode';
  } else {
    buttonText = 'Dark Mode';
  }

  return (
    <div className='header'>
      <FadeIn>
        <Flex>
          <div className='logo'>
            <Link as={RouterLink} to='/' style={{ textDecoration: 'none' }}>
              Hassan Ahmed
            </Link>
          </div>
          <Spacer />
          <div className='nav-links'>
            <Link
              href='https://github.com/buhama'
              isExternal
              pr={2}
              className='github-header'
            >
              <IconButton
                size='sm'
                colorScheme={githubColor}
                aria-label='Github Link'
                icon={<FaGithub />}
              />
            </Link>
            <Link
              href='https://twitter.com/hassanahmed_ca'
              isExternal
              pr={2}
              className='twitter-header'
            >
              <IconButton
                size='sm'
                colorScheme={twitterColor}
                aria-label='Twitter Link'
                icon={<FaTwitter />}
              />
            </Link>
            <Link
              href='https://www.linkedin.com/in/hassan-ahmed-751255131/'
              isExternal
              pr={2}
              className='linkedin-header'
            >
              <IconButton
                size='sm'
                colorScheme={linkedinColor}
                aria-label='LinkedIn Link'
                icon={<FaLinkedin />}
              />
            </Link>
            <Button
              className='color-button-text'
              onClick={toggleColorMode}
              rightIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              colorScheme={buttonColor}
              variant='solid'
              size='sm'
            >
              {buttonText}
            </Button>
            <div className='color-button-icon'>
              <IconButton
                onClick={toggleColorMode}
                size='sm'
                colorScheme={buttonColor}
                icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              />
            </div>
          </div>
        </Flex>
      </FadeIn>
    </div>
  );
};

export default Header;
