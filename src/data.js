import tothepersonreadingthis from './images/project_logos/tothepersonreadingthis.png';
import slatrophy from './images/project_logos/slatrophy.png';
import cvuologo from './images/project_logos/cvuoclubsportal.png';
import cherami from './images/project_logos/cherami.jpg';
import lifeinweeks from './images/project_logos/lifeinweeks.jpg';
import cybermonke from './images/project_logos/cybermonke.png';
import submarine from './images/project_logos/submarine.png';
import graphicdesign from './images/project_logos/graphicdesign.png';
import webdesign from './images/project_logos/webdesign.jpeg';

const projects = [
  {
    id: 10,
    name: 'Graphic Design',
    description: 'All my graphic design work. Usually for social media.',
    picture: graphicdesign,
    category: 'Design',
    link: '/projects/Graphic_Design',
    external: false,
  },
  {
    id: 9,
    name: 'Web Design',
    description: 'All my website design work.',
    picture: webdesign,
    category: 'Design',
    link: '/projects/Web_Design',
    external: false,
  },
  {
    id: 8,
    name: 'To The Person Reading This',
    description:
      'Mental health related website which accepts encouraging words, displays them under 4 categories and allows admin to manage submissions via a dashboard. Made using HTML, CSS, JavaScript, PHP and SQL. ',
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
    category: 'Blog',
    link: '/projects/CVUO_Clubs_Portal',
    external: false,
  },
  {
    id: 3,
    name: 'Twitter Memories Bot (Cher Ami)',
    description:
      'Python Twitter bot that finds and sends tweet memories via personal messages. ',
    picture: cherami,
    category: 'Software',
    link: 'https://twitter.com/memoriesbot_',
    external: true,
  },
  {
    id: 4,
    name: 'CyberMonkE - IBM Design Challenge',
    description:
      'A unique exoskeleton design for users all users, that enhances strength, is lightweight, accessible to users with physical disabilities &  cost efficient. Done for the IBM Design Challenge at the uOttawa Designathon. ',
    picture: cybermonke,
    category: 'CAD',
    link: '/projects/CyberMonke',
    external: false,
  },
  {
    id: 5,
    name: '“Life in Weeks” Twitter Bot',
    description:
      'Extremely morbid responsive Python Twitter bot, visualizing users’  life on an infographic.',
    picture: lifeinweeks,
    category: 'Software',
    link: 'https://twitter.com/lifeinweeks_bot',
    external: true,
  },
  {
    id: 6,
    name: 'Commercial Submarine - Capstone',
    description:
      'A submarine that is cost-efficient, maintains safety and performance but is also able to dive to various depths past 330 m at 6 knots. ',
    picture: submarine,
    category: 'CAD',
    link: '/projects/Submarine',
    external: false,
  },
];

export default projects;
