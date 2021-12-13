import { FaKaaba } from 'react-icons/fa';
import photo from './images/photo.jpg';
import tothepersonreadingthis from './images/project_logos/tothepersonreadingthis.png';
import slatrophy from './images/project_logos/slatrophy.png';
import cvuologo from './images/project_logos/cvuoclubsportal.png';

const projects = [
  {
    id: 8,
    name: 'To The Person Reading This',
    description:
      'Mental health related website which accepts encouraging words and displays them under 4 categories and allows admin to manage submissions via a dashboard. Made using HTML, CSS, JavaScript, PHP and SQL. ',
    picture: tothepersonreadingthis,
    category: 'Software',
    link: 'https://tothepersonreadingthis.com/',
    external: true,
  },
  {
    id: 1,
    name: 'How The Pandemic Forced Event Innovation',
    description:
      'A small investigation on how my team and I hosted a successful online awards show event by breaking it down to its base value to attendees.  ',
    picture: slatrophy,
    category: 'Blog',
    link: '/projects/How_The_Pandemic_Forced_Event_Innovation',
    external: false,
  },
  {
    id: 2,
    name: 'CVUO Clubs Portal',
    description: 'The details and motivations behind the CVUO Clubs Portal.',
    picture: cvuologo,
    category: 'Software',
    link: '/projects/CVUO_Clubs_Portal',
    external: false,
  },
  {
    id: 3,
    name: 'Twitter Memories Bot',
    description:
      'Python Twitter bot that finds and sends tweet memories via personal messages. ',
    picture: photo,
    category: 'Software',
    link: '/',
    external: false,
  },
  {
    id: 4,
    name: 'CyberMonkE - IBM Design Challenge',
    description:
      'A unique exoskeleton design for users all users, that enhances strength, is lightweight, accessible to users with physical disabilities &  cost efficient. Done for the IBM Design Challenge at the uOttawa Designathon. ',
    picture: photo,
    category: 'CAD',
    link: '/',
    external: false,
  },
  {
    id: 5,
    name: '“Life in Weeks” Twitter Bot',
    description:
      'Extremely morbid responsive Python Twitter bot, visualizing users’  life on an infographic.',
    picture: photo,
    category: 'Software',
    link: '/',
    external: false,
  },
  {
    id: 6,
    name: 'Commercial Submarine - Capstone',
    description:
      'A submarine that is cost-efficient, maintains safety and performance but is also able to dive to various depths past 330 m at 6 knots. ',
    picture: photo,
    category: 'CAD',
    link: '/',
    external: false,
  },
  {
    id: 7,
    name: 'All-Purpose Mouse for Individuals with Minimal Dexterity',
    description:
      'A custom-built computer mouse for a user with limited dexterity and arm movement. ',
    picture: photo,
    category: 'CAD',
    link: '/',
    external: false,
  },
];

export default projects;
