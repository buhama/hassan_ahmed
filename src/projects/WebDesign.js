import { SimpleGrid, Image, Link } from '@chakra-ui/react';
import img1 from '../images/web_design/1.png';
import img2 from '../images/web_design/2.png';
import img4 from '../images/web_design/4.png';
import img5 from '../images/web_design/5.png';
import img7 from '../images/web_design/cvuo.png';
import img8 from '../images/web_design/ruby.png';
import img9 from '../images/web_design/thatmakergirl.png';

const Web_Design = () => {
  var images = [
    {
      img: img1,
      link: 'https://www.onyxonline.ca/',
    },
    {
      img: img2,
      link: 'https://www.mess-segm.ca/home',
    },
    {
      img: img4,
      link: 'https://www.uottawadesignleague.ca/',
    },
    {
      img: img5,
      link: 'https://www.uottawampsp.com/',
    },
    {
      img: img7,
      link: 'https://www.cvuo.ca/home',
    },
    {
      img: img8,
      link: 'https://www.rubydev.ca/',
    },
    {
      img: img9,
      link: 'https://www.thatmakergirl.ca/',
    },
  ];

  return (
    <div className='design-blog'>
      <SimpleGrid minChildWidth='420px' spacing={2}>
        {images.map((image) => (
          <Link href={image.link} isExternal>
            <Image src={image.img} />
          </Link>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Web_Design;
