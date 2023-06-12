import Header from '../../Common/Header';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { sectionHeaderVariants } from '../../../variants';
import soundScopeImg from '../../../assets/images/projects/sound-scope/soundScope.png';
import personalWebsite from '../../../assets/images/projects/personal-website/personalWebsite.png';

const Projects = () => {

  const projectData = [
    {
      project:'Featured Project',
      header: 'Sound-Scope',
      paragraph: 'A Spotify Profile Viewer that allows users to view their top tracks, artists, recently played songs, and playlists. The app can suggest songs based on existing playlists and can create new playlists accordingly within the users account.',
      madeWith : 'Next.js, TypeScript, Tailwind CSS, Material UI, Framer-Motion, Zustand',
      github: 'https://github.com/AnthonyChablov/sound-scope',
      link: 'https://sound-scope-anthonychablov.vercel.app/',
      img: soundScopeImg
    },
    {
      project:'Featured Project',
      header: 'Project 2',
      paragraph: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      madeWith : 'VS Code, Sublime Text Atom, iTerm2, Hyper',
      github: 'https://en.wikipedia.org/wiki/Next.js',
      link: 'https://en.wikipedia.org/wiki/Next.js',
      img: soundScopeImg
    },
    {
      project:'Featured Project',
      header: 'Personal Portfolio Website',
      paragraph: 'A fully-responsive, mobile-friendly, SEO-friendly portfolio website with darkmode toggle functionality and scroll-down animations.',
      madeWith : 'Next.js, TypeScript, Tailwind CSS, Material UI, Framer-Motion, Zustand',
      github: 'https://github.com/AnthonyChablov/personal-website-v2',
      link: 'https://www.anthonychablov.com/',
      img: personalWebsite
    },
    {
      project:'Featured Project',
      header: 'Project 4',
      paragraph: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      madeWith : 'VS Code, Sublime Text Atom, iTerm2, Hyper',
      github: 'https://en.wikipedia.org/wiki/Next.js',
      link: 'https://en.wikipedia.org/wiki/Next.js',
      img: soundScopeImg
    }
  ];

  return (
    <section className="text-center tracking-wide mb-10 pt-16" id='projects'>
        <div className="flex items-center justify-center">
            <Header title={'02. My Projects'}/>
        </div>
        <div className="space space-y-16">
          {
            projectData.map((elem, i)=>{
              return (
                <ProjectCard 
                  key={i}
                  id={i}
                  subheader={elem.project} 
                  header={elem.header} 
                  paragraph={elem.paragraph} 
                  madewith={elem.madeWith}
                  github={elem.github}
                  link={elem.link}
                  img={elem.img}
                />
              )
            })
          }
        </div>
        
    </section>
  )
}

export default Projects;