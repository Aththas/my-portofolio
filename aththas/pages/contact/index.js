//components
import Circles from '../../components/Circles';

//icons
import {BsArrowRight} from 'react-icons/bs'

//framer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../../variants';

//useState
import React, { useState } from 'react';

const Contact = () => {

  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto URL
    const mailtoURL = `mailto:aththasrizwan123@gmail.com?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(
      `Name: ${name}\n\nMessage: ${message}`
    )}`;

    // Redirect to the mailto link
    window.location.href = mailtoURL;
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2 
            className='h2 text-center mb-12'
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Let's connect<span className='text-accent'>.</span>
          </motion.h2>
          {/* form */}
          <motion.form 
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            onSubmit={handleSubmit}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input 
                type="text" 
                placeholder='name'
                className='input'
                value={name}
                onChange={(e) =>  setName(e.target.value)}
              />
              <input 
                type="text" 
                placeholder='email'
                className='input lowercase'
              />
            </div>
            <input 
                type="text" 
                placeholder='topic'
                className='input'
                value={topic}
                onChange={(e) =>  setTopic(e.target.value)}
              />
              <textarea 
                placeholder='message' 
                className='textarea'
                onChange={(e) =>  setMessage(e.target.value)}
              >{message}</textarea>
              <button 
                className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center
                justify-center overflow-hidden hover:border-accent group'
              >
                <span className='group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's talk</span>
                <BsArrowRight 
                  className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100
                  transition-all duration-300 absolute text-[22px]'/>
              </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
