import React, {useContext} from 'react';
//import images
import Pic from '../img/about/tuan.jpg'
//import link
import { Link } from 'react-router-dom';
//import motion
import {motion} from 'framer-motion';
//import {transition1} from '../transitions';
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

  return (
    <motion.section className='section'>
      
      <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='container mx-auto h-full relative'>
        {/**text & img wrapper */}
        <div className='flex flex-col lg:flex-row
        h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/**img */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none 
            overflow-hidden'>
            <motion.img
            initial={{opacity: 0, x: '-50%'}}
            animate={{opacity: 1, x:0}}
            exit={{opacity:0, x:'-50%'}}
            transition={{ duration: 0.43 }}
            src={Pic} alt='' class="image-container"/>
          </div>

          {/**text */}
          <motion.div 
          initial={{opacity: 0, y: '-70%'}}
          animate={{opacity: 1, y:0}}
          exit={{opacity:0, y:'-70%'}}
          transition={{ duration: 0.43 }}
          className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col
          justify-center items-center lg:items-start'>

            <h1 className='h1'>About me</h1>

            <p className='mb-12 mt-2 max-w-sm'>
              I drink coffee and take a lot of 35mm films. <br/>Sometimes I code
            </p>
            <p className='mb-12'>
              e: tuanqchau2810@gmail.com <br/>i: tuanqchau_
            </p>
            
            <Link to={'/portfolio'} className='btn'>View my work</Link>
        
          </motion.div>
        </div>
      </div>

    </motion.section>

  );
};

export default About;
