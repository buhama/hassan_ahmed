import { Fragment } from 'react';
import { Image } from '@chakra-ui/image';
import photo from '../images/photo.jpg';
import { Center } from '@chakra-ui/layout';

const profile = () => {
  return (
    <div className='profile'>
      <div className='main-image'>
        <Center>
          <Image
            borderRadius='full'
            boxSize='200px'
            src={photo}
            alt='Hassan Ahmed'
          />
        </Center>
      </div>
      <div className='main-title'>
        <h1>Hassan Ahmed</h1>
        <p>
          Looking to create solutions, solve problems, maybe make something &
          have fun : )
        </p>
      </div>
    </div>
  );
};

export default profile;
