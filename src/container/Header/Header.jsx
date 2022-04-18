import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';


import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='hover'>
    <div className="app__wrapper-info">
        <SubHeading title='Chase the new flavour'/>

        <h1 className="app__header-h1">The key to find Dining
        </h1>
        <p className="p__opensans" style={{margin: '2rem 0'}}>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
        <button type='button' className='custom__button' style={{margin: '2rem 0'}}>Explore Menu</button>
    </div>

    <div className="app__wrapper-img">
        <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
