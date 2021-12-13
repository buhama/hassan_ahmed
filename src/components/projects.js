import { Box } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Project from './Project';
import projects from '../data';

const Projects = () => {
  const softwareItems = projects.filter(
    (project) => project.category === 'Software'
  );

  const cadItems = projects.filter((project) => project.category === 'CAD');
  const blogItems = projects.filter((project) => project.category === 'Blog');
  const designItems = projects.filter(
    (project) => project.category === 'Design'
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
          <Tab>Software</Tab>
          <Tab>CAD</Tab>
          <Tab>Blog</Tab>
          <Tab>Design</Tab>
        </TabList>
        <Box className='projects-box'>
          <TabPanels>
            <TabPanel>
              {softwareItems.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </TabPanel>
            <TabPanel>
              {cadItems.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </TabPanel>
            <TabPanel>
              {blogItems.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </TabPanel>
            <TabPanel>
              {designItems.map((project) => (
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
