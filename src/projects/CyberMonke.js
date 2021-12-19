import { useEffect } from 'react';
import { Button, Link, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

import FadeIn from 'react-fade-in/lib/FadeIn';

import photo1 from '../images/blog-photos/cybermonke/Cyber-Limb-2.jpg';
import photo2 from '../images/blog-photos/cybermonke/Cyber-Limb-3.jpg';
import photo3 from '../images/blog-photos/cybermonke/Cyber-Limb-4.jpg';

const CyberMonke = () => {
  const buttonColor = useColorModeValue('purple', 'green');

  useEffect(() => {
    document.title = 'CyberMonke | Hassan Ahmed';
  }, []);

  return (
    <div className='blog'>
      <FadeIn>
        <Link as={RouterLink} to='/' style={{ textDecoration: 'none' }}>
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme={buttonColor}
            variant='solid'
          >
            Go Back Home
          </Button>
        </Link>
        <div className='blog-title'>
          <h1>CyberMonkE - IBM Design Challenge</h1>
        </div>
        <div className='blog-body'>
          {/* TODO: Add Blog Images */} <h2>Introduction</h2>
          <p>
            The first-ever uOttawa Designathon happened in Feb. 2021. It was a
            3-day event where competitors from all over the world created 3D
            design solutions to complex problems. After seeing large hackathons
            year after year, it was an awesome initiative for engineers to
            compete in something that wasn’t programming. And especially great
            for aspiring Mechanical Engineers as Computer-Aided 3D Design is a
            major component of our profession.
          </p>
          <br />
          <p>
            The event also featured workshops, presentations, and a list of
            social community activities. After two sleepless nights, competitors
            presented their solutions on the third day and the top 3 teams were
            picked for each category. My team, <b>CyberMonkE</b>, placed{' '}
            <b>2nd</b> for the <b>IBM Design Challenge</b>.
          </p>
          <br />
          <Image loading='lazy' src={photo3}></Image>
          <br />
          <h2>Design Criteria</h2>
          <p>
            The IBM Design Challenge was to design an exoskeleton for a human
            arm, that met the following specifications:
          </p>
          <ul>
            <li>Lightweight </li>
            <li>Enhanced strength to superhuman levels</li>
            <li>Easy to clean</li>
            <li>Fits all arm sizes</li>
            <li>Accessible to users with physical disabilities</li>
          </ul>
          <br />
          <SimpleGrid
            minChildWidth={{ base: '50vw', md: '15vw', lg: '15vw' }}
            spacing={2}
          >
            <Image loading='lazy' src={photo1}></Image>
            <Image loading='lazy' src={photo2}></Image>
          </SimpleGrid>
          <br />
          <h2>Solution</h2>
          <p>
            Our solution used <b>Nylon Fibers</b> twisted in coils. When heated,
            the coils retracted, behaving similarly to muscle fibers. We decided
            to go this route instead of the usual pneumatics or hydraulics to
            allow for a large strength boost to the user while keeping the
            apparatus lightweight. The fibers are able to exert <b>2000 J/kg</b>{' '}
            of specific work, which is <b>50x</b> more than natural muscles.
            Electric current is supplied to the fibers which are held in tension
            and connecting the 3 major parts of the design. The electrical
            current is used to heat the fibers - for this project, it was
            assumed that the team at IBM would responsible for handling the
            control systems that supplied the current.
          </p>
          <br />
          <p>
            The whole design is broken up into three major components: the hand,
            the forearm, and the bicep. Each component is separated and placed
            are held together using a flexible composite mesh. The mesh also
            serves to be flexible enough that users with various different arm
            sizes can easily equip the CyberLimb and it also acts as an
            insulator to prevent heat from reaching the users’ skin from the
            fibers being heated. Each part is further connected with the nylon
            cables, for a transfer of forces from the bicep to the tip of each
            finger. The separate parts also allow for easy manufacturing of the
            product and checks of the criteria of it being easy to clean. Each
            part is also broken down further into 4 smaller parts that are all
            connected via an adjustable strap. This allows for users with any
            weight arm to be able to equip CyberLimb and adjust the straps to
            fit their size.
          </p>
          <br />
          <p>
            The fingers on the hand are a minor separate part on their own and
            have their movements interconnected (apart from the thumb). This
            allows a user with a disability in some of their fingers to still be
            able to use CyberLimb at its full potential.
          </p>
          <br />
          <p>
            There are no motors or linear actuators used in this design due to
            the special nature of the nylon fibers, which makes the design
            extremely lightweight and compact. A nylon fiber coil is present at
            both sides of the bicep, forearm, and each finger.
          </p>
          <br />
          <h2>Conclusion</h2>
          <p>
            Overall the CyberLimb provided a unique solution to the human arm
            exoskeleton concept, using nylon fibers very unique property when
            coiled and heated. One major feasibility concern with this solution
            was the amount of power required to heat each of the fibers to
            achieve the level of strength considered “superhuman”. However,
            mechanically, the solution was complete, efficient, and simple.
          </p>
          <br />
          <p>
            Placing 2nd at this Designathon got us an invite to the
            international Designathon where the top teams from each school
            compete against each other, and it will be exciting to see how we
            fair up.
          </p>
          <br />
        </div>
      </FadeIn>
    </div>
  );
};

export default CyberMonke;
