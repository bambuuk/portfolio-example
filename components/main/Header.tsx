import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from 'next/link';
import Sidebar from '../sub/Sidebar';
import Logo from '../sub/Logo';

const Header = () => {
  return (
    <header
      className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] 
      backdrop-blur-md z-50 px-[15px] lg:px-10'
    >
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <Logo />

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
          <Link href="mailto:ivan.korobka.work@gmail.com">
            <IoIosMail
              className="text-[24px] text-white lg:hover:text-[#971bc8] transition-all 
              border border-white rounded-lg lg:hover:border-[#971bc8]"
            />
          </Link>
        </div>

        <Sidebar />
      </div>
    </header>
  )
}

export default Header
