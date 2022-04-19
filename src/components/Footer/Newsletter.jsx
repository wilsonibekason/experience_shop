import React from 'react';
import { SubHeading} from '../../components'

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'  style={{marginTop: '1rem'}}>
    <div className="app__newsletter-heading">
      <SubHeading title='newsletter' />
      <h1 className="headtext__cormorant" style={{textAlign: 'center'}}>
        Subscribe to our Newsletter
      </h1>
      <p className="p__opensans">
        Lorem, ipsum dolor.
      </p>
    </div>

    <div className="app__newsletter-input flex__center">
      <input type="email" name='email' placeholder='Enter Your Email Address' />
      <button className="custom__button">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
 