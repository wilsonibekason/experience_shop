import React from 'react';
import { SubHeading,  } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
        <SubHeading title='contact' />
        <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}> Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, magni!
          </p>
          <p className="p__cormorant" style={{color: '#DDD68', margin: '2rem 0'} }>
            Lorem ipsum 
          </p>
          <p className="p__opensans">
            Lorem ipsum dolor 
          </p>
          <p className="p__opensans">
            Lorem ipsum dolor 
          </p>
        </div>
        <button className='custom__button' style={{marginBottom: '2rem'}}> </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
