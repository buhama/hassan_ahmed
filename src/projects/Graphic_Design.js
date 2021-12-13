import { SimpleGrid, Image, Wrap, WrapItem, Center } from '@chakra-ui/react';
import img1 from '../images/graphic_design/1_1.png';
import img2 from '../images/graphic_design/1.png';
import img3 from '../images/graphic_design/2.png';
import img4 from '../images/graphic_design/3.png';
import img5 from '../images/graphic_design/4.png';
import img6 from '../images/graphic_design/area+51.png';
import img7 from '../images/graphic_design/BBCR-Test_01.png';
import img8 from '../images/graphic_design/BBCR-Test_02.png';
import img9 from '../images/graphic_design/BBCR-Test_03.png';
import img10 from '../images/graphic_design/BBCR-Test_04.png';
import img11 from '../images/graphic_design/BBCR-Test_05.png';
import img12 from '../images/graphic_design/BBCR-Test_06.png';
import img13 from '../images/graphic_design/clubs+fair.jpg';
import img14 from '../images/graphic_design/first+schedule.png';
import img15 from '../images/graphic_design/messy+frost.png';
import img16 from '../images/graphic_design/steamfest.png';
import img17 from '../images/graphic_design/UOTTAWA+CLUBS+FAIR+v1.0.png';

import { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; //

const Graphic_Design = () => {
  var images = [
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
    img17,
    img6,
    img16,
  ];

  return (
    <div className='blog'>
      <SimpleGrid minChildWidth='220px' spacing={2}>
        {images.map((img) => (
          <Image src={img} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Graphic_Design;
