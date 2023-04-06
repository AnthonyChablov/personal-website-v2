import Header from '../../Common/Header';
import ProjectCard from './ProjectCard';



const Projects = () => {

  const projectData = [
    {
      project:'Featured Project',
      header: 'Project 1',
      paragraph: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      madeWith : 'VS Code, Sublime Text Atom, iTerm2, Hyper',
      github: 'https://en.wikipedia.org/wiki/Next.js',
      link: 'https://en.wikipedia.org/wiki/Next.js'
    },
    {
      project:'Featured Project',
      header: 'Project 2',
      paragraph: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      madeWith : 'VS Code, Sublime Text Atom, iTerm2, Hyper',
      github: 'https://en.wikipedia.org/wiki/Next.js',
      link: 'https://en.wikipedia.org/wiki/Next.js'
    },
    {
      project:'Featured Project',
      header: 'Project 3',
      paragraph: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      madeWith : 'VS Code, Sublime Text Atom, iTerm2, Hyper',
      github: 'https://en.wikipedia.org/wiki/Next.js',
      link: 'https://en.wikipedia.org/wiki/Next.js'
    },
    {
      project:'Featured Project',
      header: 'Project 4',
      paragraph: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      madeWith : 'VS Code, Sublime Text Atom, iTerm2, Hyper',
      github: 'https://en.wikipedia.org/wiki/Next.js',
      link: 'https://en.wikipedia.org/wiki/Next.js'
    }
  ];

  return (
    <section className="text-center tracking-wide mb-10 pt-16" id='projects'>
        <div className="flex items-center justify-center">
            <Header title={'02. My Projects'}/>
        </div>
        <div className="space space-y-12">
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
                />
              )
            })
          }
        </div>
        
    </section>
  )
}

export default Projects;