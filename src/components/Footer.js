import { Link, Box, useColorModeValue } from '@chakra-ui/react';
import { IconButton, SimpleGrid, Center } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const twitterColor = useColorModeValue('blue', 'blue');
  const githubColor = useColorModeValue('green', 'red');
  const linkedinColor = useColorModeValue('red', 'purple');
  const linkColor = useColorModeValue('blue.900', 'blue.100');

  return (
    <Box bg={bg}>
      <div className='footer'>
        <Center>
          <div className='icons-container'>
            <div className='icons'>
              <SimpleGrid columns={3} spacing={1}>
                <Link href='https://github.com/buhama' isExternal>
                  <IconButton
                    aria-label='Github Link'
                    colorScheme={githubColor}
                    icon={<FaGithub />}
                    size='sm'
                  />
                </Link>
                <Link href='https://twitter.com/hassanahmed_ca' isExternal>
                  <IconButton
                    aria-label='Twitter Link'
                    colorScheme={twitterColor}
                    icon={<FaTwitter />}
                    size='sm'
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
                    size='sm'
                  />
                </Link>
              </SimpleGrid>
            </div>
          </div>
        </Center>
        <Center>
          <Link
            href='mailto:hassan@hassanahmed.ca'
            isExternal
            color={linkColor}
            style={{ textDecoration: 'underline', fontWeight: 'bold' }}
          >
            <p>hassan@hassanahmed.ca</p>
          </Link>
        </Center>
      </div>
    </Box>
  );
};

export default Footer;
