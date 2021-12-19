import { Box } from '@chakra-ui/react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from '@chakra-ui/react';
import Project from './Project';
import projects from '../data';

import FadeIn from 'react-fade-in/lib/FadeIn';

const Projects = ({ setSelectedTab }) => {
  const softwareItems = projects.filter(
    (project) => project.category === 'Software'
  );
  const cadItems = projects.filter((project) => project.category === 'CAD');
  const blogItems = projects.filter((project) => project.category === 'Blog');
  const designItems = projects.filter(
    (project) => project.category === 'Design'
  );

  const headerColor = useColorModeValue('purple.800', '#E0FABD');
  const tabColor = useColorModeValue('purple', 'green');
  const tabTextColor = useColorModeValue('white', 'black');

  const onChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Box
      borderWidth={{ base: '0px', md: '1px', lg: '1px' }}
      borderRadius='lg'
      p={4}
      mx={{ base: 0, md: 6, lg: 6 }}
      className='projects-main'
    >
      <FadeIn>
        <Box color={headerColor}>
          <div className='projects-header'>
            <h1>Cool Projects and Blog Pieces</h1>
          </div>
        </Box>

        <Tabs
          onChange={(index) => onChange(index)}
          isFitted
          variant='enclosed'
          colorScheme={tabColor}
        >
          <TabList>
            <Tab
              _hover={{ color: tabTextColor, bg: headerColor }}
              _selected={{ color: tabTextColor, bg: headerColor }}
            >
              Software
            </Tab>
            <Tab
              _hover={{ color: tabTextColor, bg: headerColor }}
              _selected={{ color: tabTextColor, bg: headerColor }}
            >
              CAD
            </Tab>
            <Tab
              _hover={{ color: tabTextColor, bg: headerColor }}
              _selected={{ color: tabTextColor, bg: headerColor }}
            >
              Blog
            </Tab>
            <Tab
              _hover={{ color: tabTextColor, bg: headerColor }}
              _selected={{ color: tabTextColor, bg: headerColor }}
            >
              Design
            </Tab>
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
      </FadeIn>
    </Box>
  );
};

export default Projects;
