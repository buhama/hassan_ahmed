import { Image } from '@chakra-ui/image';
import photo from '../images/photo.jpg';
import { Center, useColorModeValue, Box, SimpleGrid } from '@chakra-ui/react';

import FadeIn from 'react-fade-in/lib/FadeIn';

import toolsData from '../tools_data';
import ToolsButton from './ToolsButton';

const Profile = ({ selectedTab }) => {
  const headerColor = useColorModeValue('purple.800', '#E0FABD');

  // const softwareItems = toolsData.filter(
  //   (tool) => tool.category === 'Software'
  // );
  // const cadItems = toolsData.filter((tool) => tool.category === 'CAD');
  // const blogItems = toolsData.filter((tool) => tool.category === 'Blog');
  // const designItems = toolsData.filter((tool) => tool.category === 'Design');
  var items;

  if (selectedTab === 0) {
    items = toolsData.filter((tool) => tool.category === 'Software');
  } else if (selectedTab === 1) {
    items = toolsData.filter((tool) => tool.category === 'CAD');
  } else if (selectedTab === 2) {
    items = toolsData.filter((tool) => tool.category === 'Blog');
  } else if (selectedTab === 3) {
    items = toolsData.filter((tool) => tool.category === 'Design');
  }

  return (
    <div className='profile'>
      <FadeIn>
        <div className='main-image'>
          <Center>
            <Image
              borderRadius='full'
              boxSize='200px'
              src={photo}
              alt='Hassan Ahmed'
            />
          </Center>
        </div>
        <div className='main-title'>
          <Box color={headerColor}>
            <FadeIn>
              <h1>HASSAN AHMED</h1>
            </FadeIn>
          </Box>
          <i>
            <p>
              Looking to create solutions, solve problems, maybe make something
              & have fun : )
            </p>
          </i>
        </div>
        <Box>
          <Center pt={3}>
            <FadeIn>
              <h1 style={{ fontSize: '25px' }}>TOOLS</h1>
            </FadeIn>
          </Center>
          <Center py={2}>
            <SimpleGrid columns={[2, 4, 3]} spacing={1}>
              {items.map((tool) => (
                <ToolsButton key={tool.id} name={tool.name} />
              ))}
            </SimpleGrid>
          </Center>
        </Box>
      </FadeIn>
    </div>
  );
};

export default Profile;
