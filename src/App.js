import { Fragment } from 'react';
import Profile from './components/profile';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

import './App.css';

import {
  Flex,
  Box,
  Center,
  Grid,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <Grid templateColumns='repeat(10, 1fr)' gap={1} className='main'>
        <GridItem colSpan={{ base: 10, md: 4, lg: 4 }}>
          <Center>
            <Profile />
          </Center>
        </GridItem>
        <GridItem colSpan={{ base: 10, md: 6, lg: 6 }}>
          <Box>
            <Projects />
          </Box>
        </GridItem>
      </Grid>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
