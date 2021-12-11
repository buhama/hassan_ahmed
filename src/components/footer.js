import { Fragment } from 'react';
import { Center, Flex, Link, Spacer } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';
import { IconButton, SimpleGrid } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const header = () => {
  return (
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
  );
};

export default header;
