import { Fragment } from 'react';
import Profile from './components/profile';
import Projects from './components/projects';
import Header from './components/header';
import './App.css';

import { Flex, Box, Center } from '@chakra-ui/react';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Flex color='black'>
        <Center flex='0.4'>
          <Profile />
        </Center>
        <Box flex='0.6'>
          <Projects />
        </Box>
      </Flex>
    </Fragment>
  );
};

export default App;
