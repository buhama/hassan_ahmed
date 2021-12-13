import { Button, Link } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Submarine = () => {
  return (
    <div className='blog'>
      <Link as={RouterLink} to='/' style={{ textDecoration: 'none' }}>
        <Button leftIcon={<ArrowBackIcon />} colorScheme='blue' variant='solid'>
          Go Back Home
        </Button>
      </Link>
      <div className='blog-title'>
        <h1>Commercial Submarine - Capstone</h1>
      </div>
      <div className='blog-body'>
        {/* TODO: Add Blog Images */} <h2>Design Criteria</h2> <br />
        <ul>
          <li>Cost-efficient</li>
          <li>Depth rating: 330m to 1000m </li>
          <li>Speed: 2 knots - 6 knots </li>
        </ul>
        <br />
        <h2>Introduction</h2>
        <br />
        <p>
          The final capstone project is a major milestone for all aspiring
          engineering students. It forces us to use all of the skills learned
          and knowledge gained throughout our degree in one cumulative project.
          The course is worth twice as much as a regular course, and large
          deliverables are submitted every other week. Weekly evaluation
          meetings are held with professors that replicate a professional
          setting, that many engineers find themselves in. Submitting the final
          Capstone report is a right of passage for engineers before they fully
          enter the job market.
        </p>
        <br />
        <h2>Proposed Design</h2>
        <p>
          The event also featured workshops, presentations, and a list of social
          community activities. After two sleepless nights, competitors
          presented their solutions on the third day and the top 3 teams were
          picked for each category. My team, <b>CyberMonkE</b>, placed{' '}
          <b>2nd</b> for the <b>IBM Design Challenge</b>.
        </p>
        <br />
        <h2>Design Criteria</h2>
        <br />
        <h3>Brief Design Summary</h3>
        <br />
        <p>
          Two translucent acrylic hulls make up the majority of the structure of
          the submarine. Trying to achieve such high speeds of 6 knots, while
          maintaining costs low meant that the design had to be minimal and only
          the most important components were kept, hence the bare-bones look of
          the submarine. A titanium frame wraps around the hulls to seal them
          watertight. Titanium was also the primary material used to manufacture
          the hatch. It was mainly picked due to its corrosion resistance in
          seawater, which greatly outweighed its high cost.
        </p>
        <br />
        <p>
          Large thrusters on each side of the submarine control speed and
          movement. Up to 6 batteries are placed at the bottom of the submarine
          (not pictured) in between the main body and the ballasts. Life support
          inside the submarine contains two oxygen tanks, a control system, and
          two CO2 scrubbers. A dehumidifier is also included to control humidity
          and condensation. Four lift points are placed around the frame to
          allow for deployment and rescue. Expoxy penetrators are used to
          allowing for wiring from the outside to the inside of the submarine,
          to allow for use of electrical components.
        </p>
        <br />
        <h3>Parametrization</h3>
        <br />
        <p>
          Parametrization was important to the design to allow for clients to
          input desired speeds, depths, and dive duration. Each input affected
          the design in a multitude of ways, such as dome thickness, batteries
          required, etc. The parameterization flow chart shows how the inputs
          affected certain aspects of the submarine and the intermediate
          calculations with each changing input.
        </p>
        <br />
        <h2>Conclusion</h2>
        <br />
        <p>
          Finally, the submarine design allowed for a cost-effective, safe, and
          efficient submersible for commercial uses such as tourism, research,
          and recreational. The submarine’s minimal design allows it to meet
          many high-level criteria without largely affecting its weight or cost.
        </p>
        <br />
        <p>
          Collaboration with our sister team, which designed the submarine’s
          ballasts, is one thing that can be improved in the future, to allow
          for better connectivity between the main body and the ballasts.
        </p>
        <br />
        <p>
          Working on this Commercial Submarine Capstone Project was a valuable
          experience for my team and I. It allowed us to explore an innovative
          side to engineering that is sometimes lacking from our content-heavy
          classes.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Submarine;
