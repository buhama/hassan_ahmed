import { Image } from '@chakra-ui/image';
import photo from '../images/photo.jpg';
import {
  Center,
  useColorModeValue,
  Box,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';

import toolsData from '../tools_data';
import ToolsButton from './ToolsButton';

const Profile = ({ selectedTab }) => {
  const headerColor = useColorModeValue('purple.800', '#E0FABD');

  const softwareItems = toolsData.filter(
    (tool) => tool.category === 'Software'
  );
  const cadItems = toolsData.filter((tool) => tool.category === 'CAD');
  const blogItems = toolsData.filter((tool) => tool.category === 'Blog');
  const designItems = toolsData.filter((tool) => tool.category === 'Design');

  if (selectedTab === 0) {
    console.log('hellow');
  } else {
    // console.log(selectedTab);
  }
  return (
    <div className='profile'>
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
          <h1>HASSAN AHMED</h1>
        </Box>
        <i>
          <p>
            Looking to create solutions, solve problems, maybe make something &
            have fun : )
          </p>
        </i>
      </div>
      <Box>
        <Center pt={3}>
          <h1 style={{ fontSize: '25px' }}>TOOLS</h1>
        </Center>
        <Center p={2}>
          <SimpleGrid columns={[2, 4, 3]} spacing={1}>
            {softwareItems.map((tool) => (
              <ToolsButton key={tool.id} name={tool.name} />
            ))}
          </SimpleGrid>
        </Center>
      </Box>
    </div>
  );
};

export default Profile;
