'use client';

import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
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
        variants={slideInFromTop}
        className='Welcome-box py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]'
      >
        <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
        <h1 className='Welcome-text text-[13px]'>Think better with NextJS 14</h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Making app with modern technologies
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.8)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
      >
        Never miss a task deadline or idea
      </motion.div>
    </motion.div>
  )
}

export default SkillText
