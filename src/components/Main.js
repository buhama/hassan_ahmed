import Profile from './Profile';
import Projects from './Projects';

import { ChakraProvider, Box, Center, Grid, GridItem } from '@chakra-ui/react';

const Main = () => {
  return (
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
  );
};

export default Main;
