import tothepersonreadingthis from './images/project-logos/tothepersonreadingthis.png';
import slatrophy from './images/project-logos/slatrophy.png';
import portallogo from './images/project-logos/cvuoclubsportal.png';
import cherami from './images/project-logos/cherami.jpg';
import lifeinweeks from './images/project-logos/lifeinweeks.jpg';
import cybermonke from './images/project-logos/cybermonke.png';
import submarine from './images/project-logos/submarine.png';
import graphicdesign from './images/project-logos/graphicdesign.png';
import webdesign from './images/project-logos/webdesign.jpeg';
import cvuologo from './images/project-logos/cvuologo.png';

const projects = [
  {
    id: 11,
    name: 'The Thing I Am Most Proud Of',
    description:
      'A quick write up of my amazing experience on the Campus Vibez uOttawa team.',
    picture: cvuologo,
    category: 'Blog',
    link: '/projects/The-Thing-I-Am-Most-Proud-Of',
    external: false,
  },
  {
    id: 10,
    name: 'Graphic Design',
    description:
      'Graphic design is my passion. Here you can check out some of the few that I’ve done over the last few years. Typically, I’m making new graphics daily - so being able to push out content fast has become something as familiar to me as breathing.',
    picture: graphicdesign,
    category: 'Design',
    link: '/projects/GraphicDesign',
    external: false,
  },
  {
    id: 9,
    name: 'Web Design',
    description:
      'Making websites is more than just software developing. One needs an eye for design. Check out my web design work.',
    picture: webdesign,
    category: 'Design',
    link: '/projects/WebDesign',
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
    link: '/projects/How-The-Pandemic-Forced-Event-Innovation',
    external: false,
  },
  {
    id: 2,
    name: 'CVUO Clubs Portal',
    description: 'The details and motivations behind the CVUO Clubs Portal.',
    picture: portallogo,
    category: 'Blog',
    link: '/projects/CVUO-Clubs-Portal',
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
  {
    id: 6,
    name: 'ChatGPT: The Future of Productivity',
    description:
      'ChatGPT is a large language model trained by OpenAI that has the potential to revolutionize productivity with its quick processing of large amounts of information, adaptability to users\' needs, and personalization. It has the potential to become a valuable tool for increasing productivity. As it continues to improve, we can expect more impressive capabilities and applications.',
    picture: submarine,
    category: 'Blog',
    link: '/projects/chatgpt-blog',
    external: false,
  },
];

export default projects;
