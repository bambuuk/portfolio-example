'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  websiteLink: string;
}

const ProjectCard = ({ src, title, description, websiteLink }: ProjectCardProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const animationDelay = 0.4;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: animationDelay, duration: 1 }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-20"
    >
      <Link href={websiteLink} className="cursor-pointer" target="_blank">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-cover relative lg:hover:shadow-lg lg:hover:shadow-[#7a64a5] transition-all"
        />
      </Link>

      <div className="relative p-4">
        <Link
          href={websiteLink} target="_blank"
          className="text-2xl font-semibold text-white cursor-pointer lg:hover:text-[#971bc8] transition-all"
        >
          {title}
        </Link>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </motion.div>
  )
}

export default ProjectCard
