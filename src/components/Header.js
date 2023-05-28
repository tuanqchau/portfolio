import React, {useContext} from 'react';
//import components
import Socials from './Socials';
import MobileNav from './MobileNav';

//import link
import {Link} from 'react-router-dom'

import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

  return (
  <header className='fixed w-full px-[30x] 
  lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      {/*logo*/}
      <Link 
        onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
        to={'/'} className='text-[#000000]
       font-semibold'style={{fontSize: '25px'}}>
        Tuan Chau
      </Link>

      <nav className='hidden lg:flex gap-x-12 font-bold'>

        <Link 
          onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
          to={'/'} className='text-[#696c6d]
        hover:text-primary transition'>
          Home     
        </Link>

        <Link 
          onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
          to={'/about'} className='text-[#696c6d]
        hover:text-primary transition'>
          About          
        </Link>

        <Link 
          onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
          to={'/portfolio'} className='text-[#696c6d]
        hover:text-primary transition'>
          Gallery          
        </Link>

        

      </nav>

      {/*socials*/}
      <Socials/>
      
      {/**mobile nav */}
      <MobileNav/>
    </div>
  </header>
  );
};

export default Header;
