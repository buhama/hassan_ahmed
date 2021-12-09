import { Fragment } from 'react';
import { Center, Flex, Link, Spacer } from '@chakra-ui/layout';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';
import { IconButton, SimpleGrid } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';

const header = () => {
  return (
    <div className='footer'>
      <div className='icons'>
        <SimpleGrid columns={3} spacing={12}>
          <IconButton aria-label='Search database' icon={<FaGithub />} />
          <IconButton aria-label='Search database' icon={<FaFacebook />} />
          <IconButton aria-label='Search database' icon={<FaTwitter />} />
        </SimpleGrid>
      </div>
    </div>
  );
};

export default header;
