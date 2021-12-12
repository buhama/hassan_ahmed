import React, { useState, Fragment } from 'react';
import { Box, useColorModeValue, Link } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from 'react-router-dom';

const Project = ({ project }) => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  if (project.external) {
    return (
      <Fragment>
        <Link href={project.link} isExternal>
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
              <h1 className='project-title'>{project.name}</h1>
              <p className='project-description'>{project.description}</p>
            </Box>
          </Box>
        </Link>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Link as={RouterLink} to={project.link}>
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
              <h1 className='project-title'>{project.name}</h1>
              <p className='project-description'>{project.description}</p>
            </Box>
          </Box>
        </Link>
      </Fragment>
    );
  }
};

export default Project;
