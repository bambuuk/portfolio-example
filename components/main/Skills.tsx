import { Frontend_skill } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section
      className='flex flex-col items-center justify-center gap-2 min-h-screen h-full relative pt-20 px-[15px] sm:px-10'
      id="skills"
    >
      <SkillText />
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {
          Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))
        }
      </div>

      <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
          <video
            className='w-full h-auto'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='/cards-video.webm'
          ></video>
        </div>
      </div>
    </section>
  )
}

export default Skills
