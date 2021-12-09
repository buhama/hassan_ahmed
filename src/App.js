import { Fragment } from 'react';
import Profile from './components/profile';
import Projects from './components/projects';
import Header from './components/header';
import Footer from './components/footer';
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
    <Fragment>
      <Header />
      {/* <SimpleGrid columns={[1, 1, 2]} spacing={5}>
        <Center>
          <Profile />
        </Center>
        <Box>
          <Projects />
        </Box>
      </SimpleGrid> */}
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
      {/* <Flex color='black'>
        <Center
          flex={{
            base: null,
            md: null,
            xl: null,
          }}
        >
          <Profile />
        </Center>
        <Box
          flex={{
            base: null,
            md: null,
            xl: null,
          }}
        >
          <Projects />
        </Box>
      </Flex> */}
      <Footer />
    </Fragment>
  );
};

export default App;
