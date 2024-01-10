'use client';

import { slideInFromTop } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Encryption = () => {
  return (
    <section className='flex flex-row relative items-center justify-center w-full min-h-screen h-full'>
      <div className='absolute w-auto h-auto top-[60px] sm:top-[50px] lg:top-0 z-[5]'>
        <motion.div
          variants={slideInFromTop}
          className='text-[25px] sm:text-[40px] font-medium text-center text-gray-200'
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className='flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto'>
        <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
          <Image
            src="/LockTop.png"
            alt="Lock Top"
            width={50}
            height={50}
            className='translate-y-5 transition-all duration-200 group-hover:translate-y-11'
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className='z-10'
          />
        </div>

        <div className='Welcome-box my-[20px] px-[15px] py-[4px] z-[20] border border-[#7042f88b] opacity-[0.9]'>
          <h1 className='Welcome-text text-[12px]'>Encryption</h1>
        </div>
      </div>

      <div className='absolute z-[20] bottom-[80px] sm:bottom-[50px] lg:bottom-[10px] px-[5px]'>
        <div className='cursive text-lg sm:text-[20px] font-medium text-center text-gray-300'>
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className='w-full flex items-start justify-center absolute'>
        <video
          loop
          muted
          autoPlay
          playsInline
          preload='false'
          className='w-full h-auto'
          src="/encryption.webm"
        />
      </div>
    </section>
  )
}

export default Encryption;
