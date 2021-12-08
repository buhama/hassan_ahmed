import { Fragment } from 'react';
import photo from '../images/photo.jpg';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import Project from './project';

const projects = () => {
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      p={4}
      mx={6}
      className='projects-box'
    >
      <div className='projects'>
        <div className='projects-header'>
          <h1>Projects</h1>
        </div>
        <div className='project'>
          <Project />
        </div>
      </div>
    </Box>
  );
};

export default projects;
