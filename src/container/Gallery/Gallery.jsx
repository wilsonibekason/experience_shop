import React, { useRef } from 'react';
import { SubHeading, MenuItem } from '../../components';

import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

import './Gallery.css';
import { images } from '../../constants';


const image = [images.gallery01, images.gallery02,images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = useRef(null);

  const onScroll =  (direction) => {
    const {current} = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= '300';
    } else{
      current.scrollRight += '300';
    }
  }
  return (
  <div className='app__gallary flex__center'>
   <div className="app__gallary-content">
     <SubHeading title='Gallary' />
     <h1 className="headtext__cormorant">
       Photo Gallary
     </h1>
     <p className="p__opensans" style={{margin: '2rem', color: '#AAAA'}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores deserunt, nihil illo iusto rerum tempore
     </p>
     <button type='button' className='custom__button'>You more</button>
   </div>

   <div className="app__gallary-images">
     <div className="app__gallary-images_container" ref={scrollRef}>
        {image.map((imageI, index) => (
          <div className="app__gallary-images_card flex__center"
          key={`gallery_imag-${index + 1}`}>
             <img src={imageI} alt="images" />
             <BsInstagram className='gallery__image-icon '/>
          </div>
        ))}
     </div>

     <div className="app__gallary-images_arrows">
       <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => onScroll('left')}/>
       <BsArrowRightShort className='gallery__arrow-icon' onClick={() => onScroll('right')}/>
     </div>
   </div>
  </div>
);
}

export default Gallery;
