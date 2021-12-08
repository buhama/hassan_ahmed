import { Fragment } from 'react';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import photo from '../images/photo.jpg';

const project = () => {
  return (
    <Fragment>
      {' '}
      <Box display='flex' bg='#f9f9f9' p={4} borderRadius='lg'>
        <Image
          borderRadius='full'
          boxSize='90px'
          src={photo}
          alt='Hassan Ahmed'
        />
        <Box>
          <h1 className='project-title'>To The Person Reading This</h1>
          <p className='project-description'>
            Some description of the project, like damn i guess it was cool or
            something idk, maybe it was, maybe it wasn't.{' '}
          </p>
        </Box>
      </Box>
      <Box display='flex' bg='#f9f9f9' p={4} my={4} borderRadius='lg'>
        <Image
          borderRadius='full'
          boxSize='90px'
          src={photo}
          alt='Hassan Ahmed'
        />
        <Box>
          <h1 className='project-title'>To The Person Reading This</h1>
          <p className='project-description'>
            Some description of the project, like damn i guess it was cool or
            something idk, maybe it was, maybe it wasn't.{' '}
          </p>
        </Box>
      </Box>
      <Box display='flex' bg='#f9f9f9' p={4} my={4} borderRadius='lg'>
        <Image
          borderRadius='full'
          boxSize='90px'
          src={photo}
          alt='Hassan Ahmed'
        />
        <Box>
          <h1 className='project-title'>To The Person Reading This</h1>
          <p className='project-description'>
            Some description of the project, like damn i guess it was cool or
            something idk, maybe it was, maybe it wasn't.{' '}
          </p>
        </Box>
      </Box>
      <Box display='flex' bg='#f9f9f9' p={4} my={4} borderRadius='lg'>
        <Image
          borderRadius='full'
          boxSize='90px'
          src={photo}
          alt='Hassan Ahmed'
        />
        <Box>
          <h1 className='project-title'>To The Person Reading This</h1>
          <p className='project-description'>
            Some description of the project, like damn i guess it was cool or
            something idk, maybe it was, maybe it wasn't.{' '}
          </p>
        </Box>
      </Box>
      <Box display='flex' bg='#f9f9f9' p={4} my={4} borderRadius='lg'>
        <Image
          borderRadius='full'
          boxSize='90px'
          src={photo}
          alt='Hassan Ahmed'
        />
        <Box>
          <h1 className='project-title'>To The Person Reading This</h1>
          <p className='project-description'>
            Some description of the project, like damn i guess it was cool or
            something idk, maybe it was, maybe it wasn't.{' '}
          </p>
        </Box>
      </Box>
    </Fragment>
  );
};

export default project;
