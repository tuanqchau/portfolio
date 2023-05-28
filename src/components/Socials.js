import React, {useContext} from 'react';
//import icons
import {
  ImInstagram,
  ImGithub,
  ImLinkedin,
} from 'react-icons/im';
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

  return (
    <div 
      onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a href='http://www.instagram.com/tuanqchau_' target='_blank'>
            <ImInstagram/>
          </a>
        </li>

        <li>
          <a href='https://github.com/tuanqchau' target='_blank'>
            <ImGithub/>
          </a>
        </li>

        <li>
          <a href='https://www.linkedin.com/in/tuan-chau-5566ba1b4/' target='_blank'>
            <ImLinkedin/>
          </a>
        </li>  
      </ul>  
    </div>
  );
};

export default Socials;
