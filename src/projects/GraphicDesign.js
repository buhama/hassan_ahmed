import { useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import FadeIn from 'react-fade-in/lib/FadeIn';
import img1 from '../images/graphic-design/1_1.jpg';
import img2 from '../images/graphic-design/1.jpg';
import img3 from '../images/graphic-design/2.jpg';
import img4 from '../images/graphic-design/3.jpg';
import img5 from '../images/graphic-design/4.jpg';
import img6 from '../images/graphic-design/area+51.jpg';
import img7 from '../images/graphic-design/BBCR-Test_01.jpg';
import img8 from '../images/graphic-design/BBCR-Test_02.jpg';
import img9 from '../images/graphic-design/BBCR-Test_03.jpg';
import img10 from '../images/graphic-design/BBCR-Test_04.jpg';
import img11 from '../images/graphic-design/BBCR-Test_05.jpg';
import img12 from '../images/graphic-design/BBCR-Test_06.jpg';
import img13 from '../images/graphic-design/clubs+fair.jpg';
import img14 from '../images/graphic-design/first+schedule.jpg';
import img15 from '../images/graphic-design/messy+frost.jpg';
import img16 from '../images/graphic-design/steamfest.jpg';
import img17 from '../images/graphic-design/wellness_week/0.jpg';
import img18 from '../images/graphic-design/wellness_week/1.jpg';
import img19 from '../images/graphic-design/wellness_week/2.jpg';
import img20 from '../images/graphic-design/wellness_week/3.jpg';
import img21 from '../images/graphic-design/wellness_week/4.jpg';
import img22 from '../images/graphic-design/wellness_week/5.jpg';
import img23 from '../images/graphic-design/wellness_week/6.jpg';
import img24 from '../images/graphic-design/wellness_week/7.jpg';
import img25 from '../images/graphic-design/wellness_week/8.jpg';

const GraphicDesign = () => {
  var images = [
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img1,
    img3,
    img4,
    img2,
    img5,
    img13,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img14,
    img15,
    img6,
    img16,
  ];

  useEffect(() => {
    document.title = 'Graphic Design | Hassan Ahmed';
  });

  return (
    <div className='design-blog'>
      <FadeIn>
        <SimpleGrid
          minChildWidth={{ base: '50vw', md: '27vw', lg: '27vw' }}
          spacing={1}
        >
          {images.map((img) => (
            <Image src={img} loading='lazy' />
          ))}
        </SimpleGrid>
      </FadeIn>
    </div>
  );
};

export default GraphicDesign;
