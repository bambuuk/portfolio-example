import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <section className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-500px] sm:top-[-520px] md:top-[-250px] lg:top-[-290px] xl:top-[-335px] left-0 
        z-[1] w-full h-full object-contain lg:object-cover'
      >
        <source src='/blackhole.webm' type='video/webm' />
      </video>
      <HeroContent />
    </section>
  )
}

export default Hero
