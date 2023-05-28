import React, {useContext} from 'react';
//import images
import Pic from '../img/home/dumbo.jpg';
//import link
//import { Link } from 'react-router-dom';
//import motion
import {motion} from 'framer-motion';
//import transition
import {transition1} from '../transitions';
import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

  return (
    <motion.section 
    initial={{opacity: 0, y: '-50%'}}
            animate={{opacity: 1, y:0}}
            exit={{opacity:0, y:'-50%'}}
    transition={transition1} className='section'>
      <div className='container mx-auto h-full relative'>
        {/*text n img wrapper*/}
        <div className='flex flex-col justify-center'>
          {/**text */}
          <motion.div
            initial={{opacity: 0, y: '-50%'}}
            animate={{opacity: 1, y:0}}
            exit={{opacity:0, y:'-50%'}} 
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0
            lg:w-auto z-10 lg:absolute flex flex-col
            justify-center items-center lg:items-start'>
            <h1 className='h1 mb-[350px]' style={{ color: '#000000' }}>
              Film photography <br /> & Programming
            </h1>
            
          </motion.div>
          {/**image */}
          <div className='flex justify-end max-h-0lg:max-h-max'>
            <div className='relative lg:-right-40 overflow-hidden'>
              <motion.img 
                onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
                whileHover={{scale:1.3}} 
                transition={transition1} src={Pic} alt='' />
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Home;
