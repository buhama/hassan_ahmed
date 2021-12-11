import { Link, Box, useColorModeValue } from '@chakra-ui/react';
import { IconButton, SimpleGrid } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box bg={bg}>
      <div className='footer'>
        <div className='icons'>
          <SimpleGrid columns={3} spacing={12}>
            <Link href='https://github.com/buhama' isExternal>
              <IconButton aria-label='Github Link' icon={<FaGithub />} />
            </Link>
            <Link href='https://twitter.com/hassanahmed_ca' isExternal>
              <IconButton aria-label='Twitter Link' icon={<FaTwitter />} />
            </Link>
            <Link
              href='https://www.linkedin.com/in/hassan-ahmed-751255131/'
              isExternal
            >
              <IconButton aria-label='LinkedIn Link' icon={<FaLinkedin />} />
            </Link>
          </SimpleGrid>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
