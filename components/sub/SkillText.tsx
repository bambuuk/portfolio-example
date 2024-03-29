'use client';

import { slideInFromLeft } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const SkillText = () => {
  return (
    <motion.div
      className='w-full h-auto flex flex-col items-center justify-center'
      initial='hidden'
      animate='visible'
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='Welcome-box py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]'
      >
        <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
        <h1 className='Welcome-text text-[13px]'>Think better with NextJS 14</h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.6)}
        className='text-[27px] sm:text-[30px] text-white font-medium mt-[20px] mb-[10px] text-center'
      >
        Making app with modern technologies
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.9)}
        className='cursive text-[20px] text-gray-200 mb-8 mt-[10px] text-center'
      >
        Never miss a task deadline or idea
      </motion.div>
    </motion.div>
  )
}

export default SkillText
