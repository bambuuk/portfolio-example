import { IoCloseSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from 'next/link';

interface MenuProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ open, onClose }: MenuProps) => {
  return (
    <div className="overflow-hidden">
      <div
        className={`fixed w-full h-screen bg-opacity-60 bg-gray-800 top-0 left-0 z-[2000] transition-opacity 
        duration-300 ${open ? 'transform translate-x-0 opacity-1' : 'transform -translate-x-full opacity-0'}`}
        onClick={() => onClose(false)}
      />
      <div
        className={`w-[250px] h-screen bg-gray-900 fixed z-[2100] top-0 left-0 flex flex-col items-center 
        transition-transform duration-300 ${open ? 'transform translate-x-0' : 'transform -translate-x-full'
          } overflow-hidden  px-[20px] pb-[70px] pt-[100px]`}
      >
        <IoCloseSharp
          className="text-white absolute top-[30px] right-[30px] cursor-pointer text-[30px]"
          onClick={() => onClose(false)}
        />
        <ul className="flex-1 flex flex-col items-center">
          <li
            className="text-white cursor-pointer py-2 text-2xl"
          >
            <Link
              href="#about-me"
              onClick={() => {
                onClose(false);
              }}
            >
              About me
            </Link>
          </li>
          <li
            className="text-white cursor-pointer py-2 text-2xl"
          >
            <Link
              href="#skills"
              onClick={() => {
                onClose(false);
              }}
            >
              Skills
            </Link>
          </li>
          <li
            className="text-white cursor-pointer py-2 text-2xl"
          >
            <Link
              href="#projects"
              onClick={() => {
                onClose(false);
              }}
            >
              Projects
            </Link>
          </li>
        </ul>
        <div className='flex flex-row gap-3 m-auto'>
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
              className="text-[24px] text-white lg:hover:text-[#971bc8] transition-all border border-white rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
