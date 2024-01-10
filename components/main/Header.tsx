import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Header = () => {
  return (
    <header
      className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'
    >
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className='cursor-pointer lg:hover:animate-spin'
          />

          <span className='font-bold ml-[10px] text-gray-300 lg:hover:text-[#971bc8] transition-all'>
            IK Dev
          </span>
        </a>

        <div className='w-[500px] h-full hidden lg:flex flex-row justify-center items-center md:mr-[20px]'>
          <div className='w-full h-auto flex justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] 
          px-[20px] py-[10px] rounded-full text-gray-200'>
            <a href='#about-me' className='cursor-pointer lg:hover:text-[#971bc8] transition-all'>About me</a>
            <a href='#skills' className='cursor-pointer lg:hover:text-[#971bc8] transition-all'>Skills</a>
            <a href='#projects' className='cursor-pointer lg:hover:text-[#971bc8] transition-all'>Projects</a>
          </div>
        </div>

        <div className='hidden lg:flex flex-row gap-5'>
          <Link href="https://github.com/bambuuk">
            <FaGithub
              className="text-[24px] text-white lg:hover:text-[#971bc8] transition-all"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/ivan-korobka-328b77208/">
            <FaLinkedin
              className="text-[24px] text-white lg:hover:text-[#971bc8] transition-all"
            />
          </Link>
        </div>

        <RxHamburgerMenu
          color="white"
          className="text-3xl block lg:hidden"
        />
      </div>
    </header>
  )
}

export default Header