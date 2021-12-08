import { Fragment } from 'react';
import Profile from './components/profile';
import Projects from './components/projects';
import Header from './components/header';
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
      <SimpleGrid columns={[1, 1, 2]} spacing={5}>
        <Center>
          <Profile />
        </Center>
        <Box>
          <Projects />
        </Box>
      </SimpleGrid>
      {/* <Grid templateColumns='repeat(10, 1fr)' gap={1} className='main'>
        <GridItem colSpan={{ sm: 10, md: 10, lg: 10 }}>
          <Center>
            <Profile />
          </Center>
        </GridItem>
        <GridItem colSpan={{ sm: 10, md: 10, lg: 10 }}>
          <Box>
            <Projects />
          </Box>
        </GridItem>
      </Grid> */}
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
    </Fragment>
  );
};

export default App;
