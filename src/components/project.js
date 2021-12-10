import React, { useState, Fragment } from 'react';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import projects from '../data';

const Project = ({ project }) => {
  const [index, setIndex] = useState(0);
  // const { name, description, photo } = projects[index];
  return (
    <Fragment>
      {' '}
      <Box display='flex' bg='#f9f9f9' p={4} my={4} borderRadius='lg'>
        <Image
          borderRadius='full'
          boxSize='90px'
          src={project.picture}
          alt={project.name}
        />
        <Box>
          <h1 className='project-title'>{project.name}</h1>
          <p className='project-description'>{project.description}</p>
        </Box>
      </Box>
      {/* <Box display='flex' bg='#f9f9f9' p={4} my={4} borderRadius='lg'>
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
      </Box> */}
    </Fragment>
  );
};

export default Project;
