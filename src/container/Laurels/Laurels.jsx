import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

import './Laurels.css';

const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
  <div className="app__laurels-awards_card">
    <img src={imgUrl} alt="url" />
    <div className="app__laurel-awards_card-contents">
      <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      <p className='p__cormorant' style={{color: '#DCCA87'}}>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='award'>
    <div className="app__wrapper-info">
    <SubHeading title='Awards and Recognition'  />
        <h1 className="headtext__cormorant">Our Awards And Recognition</h1>

        <div className="app__laurels-awards">
          {data.awards.map((award) => (
            <AwardCard key={award.title} award={award} /> 
          ))}
        </div>
        </div>
    
    <div className='app__wrapper-img'>
         <img src={images.laurels} alt="" />
    
    </div>
  </div>
);

export default Laurels;
