import React, { Fragment } from 'react';
import { Box, useColorModeValue, Link } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { Link as RouterLink } from 'react-router-dom';

const Project = ({ project }) => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const headerColor = useColorModeValue('purple.800', '#E0FABD');

  if (project.external) {
    return (
      <Fragment>
        <Link href={project.link} isExternal style={{ textDecoration: 'none' }}>
          <Box
            className='project-box'
            display='flex'
            bg={bg}
            p={4}
            my={4}
            borderRadius='lg'
          >
            <Image
              borderRadius='full'
              boxSize='90px'
              src={project.picture}
              alt={project.name}
            />
            <Box>
              <Box color={headerColor}>
                <h1 className='project-title'>{project.name}</h1>
              </Box>
              <p className='project-description'>{project.description}</p>
            </Box>
          </Box>
        </Link>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Link
          as={RouterLink}
          to={project.link}
          style={{ textDecoration: 'none' }}
        >
          <Box
            className='project-box'
            display='flex'
            bg={bg}
            p={4}
            my={4}
            borderRadius='lg'
          >
            <Image
              borderRadius='full'
              boxSize='90px'
              src={project.picture}
              alt={project.name}
            />
            <Box>
              <Box color={headerColor}>
                <h1 className='project-title'>{project.name}</h1>
              </Box>
              <p className='project-description'>{project.description}</p>
            </Box>
          </Box>
        </Link>
      </Fragment>
    );
  }
};

export default Project;
