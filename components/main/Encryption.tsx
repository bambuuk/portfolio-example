'use client';

import { slideInFromLeft, slideInFromTop } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Encryption = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={slideInFromLeft(0.5)}
      className='flex flex-row relative items-center justify-center w-full min-h-screen h-full'
    >
      <motion.div
        className='absolute w-auto h-auto top-[20%] sm:top-[15%] md:top-[10%] z-[5]'
      >
        <div
          className='text-[25px] sm:text-[40px] font-medium text-center text-gray-200'
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </div>
      </motion.div>

      <motion.div
        className='w-full h-full flex items-start justify-center absolute top-[50%] translate-y-[-50%]'
      >
        <video
          loop
          muted
          autoPlay
          playsInline
          preload='false'
          className='w-full h-full bg-transparent'
          src="/encryption.webm"
        />
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center top-[50%] translate-y-[-50%] absolute z-[20] w-auto h-auto"
      >
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </motion.div>


      <motion.div
        className='absolute z-[20] bottom-[20%] md:bottom-[10%] px-[5px]'
      >
        <div className='cursive text-lg sm:text-[20px] font-medium text-center text-gray-300'>
          Secure your data with end-to-end encryption
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Encryption;