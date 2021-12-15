import { useState } from 'react';
import Profile from './Profile';
import Projects from './Projects';

import { ChakraProvider, Box, Center, Grid, GridItem } from '@chakra-ui/react';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Grid templateColumns='repeat(10, 1fr)' gap={1} className='main'>
      <GridItem colSpan={{ base: 10, md: 4, lg: 4 }}>
        <Center>
          <Profile selectedTab={selectedTab} />
        </Center>
      </GridItem>
      <GridItem colSpan={{ base: 10, md: 6, lg: 6 }}>
        <Box>
          <Projects setSelectedTab={setSelectedTab} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Main;
