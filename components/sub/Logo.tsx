import Image from "next/image"

const Logo = () => {
  return (
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
  )
}

export default Logo
