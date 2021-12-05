import { Fragment } from 'react';
import Profile from './components/profile';
import Projects from './components/projects';
import './App.css';

import { Flex, Box } from '@chakra-ui/react';

const App = () => {
  return (
    <Fragment>
      <Flex color='black'>
        <Box flex='0.5'>
          <Profile flex='0.5' />
        </Box>
        <Box flex='0.5'>
          <Projects flex='0.5' />
        </Box>
      </Flex>
    </Fragment>
  );
};

export default App;
