import { Link, Box, useColorModeValue } from '@chakra-ui/react';
import { IconButton, SimpleGrid } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const twitterColor = useColorModeValue('blue', 'blue');
  const githubColor = useColorModeValue('green', 'red');
  const linkedinColor = useColorModeValue('red', 'purple');

  return (
    <Box bg={bg}>
      <div className='footer'>
        <div className='icons'>
          <SimpleGrid columns={3} spacing={12}>
            <Link href='https://github.com/buhama' isExternal>
              <IconButton
                aria-label='Github Link'
                colorScheme={githubColor}
                icon={<FaGithub />}
              />
            </Link>
            <Link href='https://twitter.com/hassanahmed_ca' isExternal>
              <IconButton
                aria-label='Twitter Link'
                colorScheme={twitterColor}
                icon={<FaTwitter />}
              />
            </Link>
            <Link
              href='https://www.linkedin.com/in/hassan-ahmed-751255131/'
              isExternal
            >
              <IconButton
                aria-label='LinkedIn Link'
                colorScheme={linkedinColor}
                icon={<FaLinkedin />}
              />
            </Link>
          </SimpleGrid>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
