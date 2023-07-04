import Header from '../../Common/Header';
import ProjectCard from './ProjectCard';
import soundScopeImg from '../../../assets/images/projects/sound-scope/soundScope.png';
import personalWebsite from '../../../assets/images/projects/personal-website/personalWebsite.png';
import todoList from '../../../assets/images/projects/todo-list/todolistImage.png'
import streetArtTo from '../../../assets/images/projects/street-art/street-art-to.png'

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
      header: 'Street-Art-To',
      paragraph: 'A .',
      madeWith : 'React.js, TypeScript, Firebase, Tailwind CSS, Material UI, Leaflet, Framer-Motion, Zustand',
      github: 'https://github.com/AnthonyChablov/street-art-to',
      link: 'https://street-art-to-ada52.web.app/',
      img: streetArtTo
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
      header: 'Task List Tracker',
      paragraph: 'A MERN Full-Stack Task-List Tracker App with User-Authentication. Allows users to Create, Read, Update and Delete tasks. Fully responsive and mobile-friendly layout with darkmode.',
      madeWith : 'MongoDB, React.js, Express.js, Node.js, TypeScript, Tailwind CSS, Material UI, Framer-Motion',
      github: 'https://github.com/AnthonyChablov/to-do-list-mern-app',
      link: 'https://to-do-list-mern-app.vercel.app/',
      img: todoList
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