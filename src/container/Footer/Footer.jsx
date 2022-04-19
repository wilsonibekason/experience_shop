import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
      
      <Newsletter  />
      {/* <FooterOverlay /> */}

      <div className="app__footer-links">
        <div className="app__footer-links_contacts">
          <h1 className="app__footer-headtext">
              Contact Us
          </h1>
          <p className="p__opensans">
            Stallion
          </p>
          <p className="p__opensans">
            Stallion
          </p>
          <p className="p__opensans">
            Stallion
          </p>
          </div>
          <div className="app__footer-links_logo">
              <img src={images.gericht} alt="footer" />
              <p className="p__opensans">
                Lorem ipsum dolor sit amet.
              </p>
              <img src={images.spoon} alt="" className='spoon__img' style={{marginTop: '15px'}}/>
              <div className="app__footer-links_icons">
                <FiFacebook />
                <FiTwitter/>
                <FiInstagram/>
              </div>
           </div>
          <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">
              Contact Us
          </h1>
          <p className="p__opensans">
            Stallion
          </p>
          <p className="p__opensans">
            Stallion
          </p>
          <p className="p__opensans">
            Stallion
          </p>
          </div>
        </div>
        <div className="footer-copywrite">
        <p className="p__opensans">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
  </div>
);

export default Footer;
