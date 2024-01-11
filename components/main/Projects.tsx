import ProjectCard from '../sub/ProjectCard';
import { ProjectsInfo } from '@/constants';

const Projects = () => {
  return (
    <section
      id="projects"
      className='flex flex-col items-center justify-center pb-20'
    >
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r 
      from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
      gap-10 px-[15px] sm:px-10'>
        {ProjectsInfo.map((item) => (
          <ProjectCard
            key={item.name}
            src={item.img}
            title={item.name}
            description={item.description}
            websiteLink={item.websiteLink}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
