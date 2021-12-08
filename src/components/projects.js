import { Fragment } from 'react';
import photo from '../images/photo.jpg';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
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
      <div className='projects-header'>
        <h1>Cool Projects and Blog Pieces</h1>
      </div>
      <Tabs variant='enclosed'>
        <TabList>
          <Tab>All</Tab>
          <Tab>Software Projects</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className='projects'>
              <div className='project'>
                <Project />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default projects;
