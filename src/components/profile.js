import { Image } from '@chakra-ui/image';
import photo from '../images/photo.jpg';
import { Center, useColorModeValue, Box } from '@chakra-ui/react';

const Profile = ({ selectedTab }) => {
  const headerColor = useColorModeValue('purple.800', '#E0FABD');
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
          <h1>{selectedTab}</h1>
          <h1>HASSAN AHMED</h1>
        </Box>
        <i>
          <p>
            Looking to create solutions, solve problems, maybe make something &
            have fun : )
          </p>
        </i>
      </div>
    </div>
  );
};

export default Profile;
