import Image from "next/image";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
    </div>
  )
}

export default ProjectCard
