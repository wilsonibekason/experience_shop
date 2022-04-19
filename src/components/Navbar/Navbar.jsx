import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import { MdOutlineRestaurantMenu} from 'react-icons/md';
import {images} from '../../constants';

import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
       return (
  <div className='app__navbar'>
    <div className="app__navbar-logo">   
      <img src={images.gericht} alt="" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#home">Adout</a></li>
      <li className='p__opensans'><a href="#home">Menu</a></li>
      <li className='p__opensans'><a href="#home">Awards</a></li>
      <li className='p__opensans'><a href="#home">Home</a></li>
    </ul>
    <div className='app__navbar-login'>
       <a href="" className='p__opensans'>Login  /  Register</a>
       <div />
       <a href="" className='p__opensans'>Book a Table</a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu 
       color='#fff' fontSize={27} onClick={() => setToggle(true)}
      />
      {toggle && (
         <div className="app__navbar-smallscreen-overlay flex__center slide-bottom">
         <MdOutlineRestaurantMenu fontSize={27} onClick={() => setToggle(false)} className='overlay__close'/>
       <ul className='app__navbar-smallscreen-links'>
       <li className='p__opensans'><a href="#home">Home</a></li>
       <li className='p__opensans'><a href="#home">Adout</a></li>
       <li className='p__opensans'><a href="#home">Menu</a></li>
       <li className='p__opensans'><a href="#home">Awards</a></li>
       <li className='p__opensans'><a href="#home">Home</a></li>
       </ul>
       </div>
      )}
     
    </div>
  </div>
);
}
export default Navbar;
