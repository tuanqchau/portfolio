import React, {useContext} from 'react';
//import images
import Image1 from '../img/portfolio/img1.jpg'
import Image2 from '../img/portfolio/img2.jpg'
import Image3 from '../img/portfolio/img3.jpg'
import Image4 from '../img/portfolio/img4.jpg'
import Image5 from '../img/portfolio/img5.jpg'
import Image6 from '../img/portfolio/img6.jpg'
import Image7 from '../img/portfolio/img7.jpg'
import Image8 from '../img/portfolio/img8.jpg'
import Image9 from '../img/portfolio/img9.jpg'
import Image10 from '../img/portfolio/img10.jpg'

//import { Link } from 'react-router-dom';


//import motion
import {motion} from 'framer-motion';
//import transition
import {transition1} from '../transitions';
import { CursorContext } from '../context/CursorContext';


const Portfolio = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

  return (
  <motion.section 
  initial={{opacity: 0, y: '100%'}}
            animate={{opacity: 1, y:0}}
            exit={{opacity:0, y:'100%'}}
            transition={transition1}
            className='section'>
    <div className='container mx-auto relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start 
        gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        {/**text */}
        

        {/**img grid */}
        <div 
          onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
          className="row">
          <div className="column">

            <img className='px-2 py-2' src={Image1} alt=''/>
            <img className='px-2 py-2' src={Image2} alt=''/>
            <img className='px-2 py-2' src={Image3} alt=''/>
            <img className='px-2 py-2' src={Image4} alt=''/>
            <img className='px-2 py-2' src={Image5} alt=''/>
          </div>
          <div className="column">
            <img className='px-2 py-2' src={Image6} alt=''/>
            <img className='px-2 py-2' src={Image7} alt=''/>
            <img className='px-2 py-2' src={Image8} alt=''/>
            <img className='px-2 py-2' src={Image9} alt=''/>
            <img className='px-2 py-2' src={Image10} alt=''/>
          </div>
      </div>

      </div>
    </div>
  </motion.section>
  );
};

export default Portfolio;
