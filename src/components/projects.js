import { Fragment, useState } from 'react';
import photo from '../images/photo.jpg';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Project from './Project';
import projects from '../data';

const Projects = () => {
  const softwareItems = projects.filter(
    (project) => project.category === 'Software'
  );
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      p={4}
      mx={6}
      className='projects-main'
    >
      <div className='projects-header'>
        <h1>Cool Projects and Blog Pieces</h1>
      </div>

      <Tabs variant='enclosed'>
        <TabList>
          <Tab>All</Tab>
          <Tab>Software</Tab>
        </TabList>
        <Box className='projects-box'>
          <TabPanels>
            <TabPanel>
              <div className='projects'>
                <div className='project'>
                  {projects.map((project) => (
                    <Project key={project.id} project={project} />
                  ))}
                  {/* <Project /> */}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              {softwareItems.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </Box>
  );
};

export default Projects;
