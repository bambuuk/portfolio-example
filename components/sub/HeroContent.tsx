'use client';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex flex-col lg:flex-row items-center justify-center px-3 sm:px-10 lg:px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 lg:justify-center items-center lg:items-start m-auto text-center lg:text-start mt-24 lg:mt-0'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]'
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>Front-end Developer Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 text-3xl sm:text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
          <span>
            Providing
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          I&apos;m a Front-end Engineer with experience in Website development. Check out my projects and skills.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className='py-2 px-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center mt-9 lg:mt-0'
      >
        <Image
          src='/mainIconsdark.svg'
          alt='work icons'
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
