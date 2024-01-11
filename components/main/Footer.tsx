import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import Logo from "../sub/Logo";

const Footer = () => {
  return (
    <footer className="w-full min-h-[213px] h-full text-gray-200 py-[15px] backdrop-blur-sm relative z-20 px-[15px] lg:px-10
      bg-[#030014] shadow-shadowToTop flex items-center">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between">
        <Logo />
        <nav className="min-w-[200px] h-auto flex flex-col items-center justify-start mt-5 sm:mt-0">
          <div className="font-bold text-[18px]">Contact me</div>
          <Link
            href="https://github.com/bambuuk"
            className="flex flex-row items-center my-[10px] mt-[25px] group"
          >
            <FaGithub
              className="text-[24px] text-white lg:group-hover:text-[#971bc8] transition-all"
            />
            <span className="text-[15px] ml-[6px] lg:group-hover:text-[#971bc8] transition-all">Github</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ivan-korobka-328b77208/"
            className="flex flex-row items-center my-[10px] group"
          >
            <FaLinkedin
              className="text-[24px] text-white lg:group-hover:text-[#971bc8] transition-all"
            />
            <span className="text-[15px] ml-[6px] lg:group-hover:text-[#971bc8] transition-all">Linkedin</span>
          </Link>
          <Link
            href="mailto:ivan.korobka.work@gmail.com"
            className="flex flex-row items-center my-[10px] group"
          >
            <IoIosMail
              className="text-[24px] text-white lg:group-hover:text-[#971bc8] transition-all 
              border border-white rounded-lg lg:group-hover:border-[#971bc8]"
            />
            <span className="text-[15px] ml-[6px] lg:group-hover:text-[#971bc8] transition-all">Email</span>
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
