import { Fragment } from 'react';
import { Center, Flex, Link, Spacer } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';

const header = () => {
  return (
    <div className='header'>
      <Flex>
        <div className='logo'>
          <Link href=''> Hassan Ahmed </Link>
        </div>
        <Spacer />
        <div className='nav-links'>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme='blue'
            variant='solid'
            size='sm'
          >
            Contact{' '}
          </Button>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme='blue'
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

export default header;
