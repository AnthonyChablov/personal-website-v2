import Header from '../../Common/Header';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="text-center tracking-wide mb-10 pt-14" id='projects'>
        <div className="flex items-center justify-center">
            <Header title={'02. My Projects'}/>
        </div>
        <ProjectCard 
          subheader={'Featured Project'} 
          header={'Project 1'} 
          paragraph={'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.'} 
          madewith={'VS Code, Sublime Text Atom, iTerm2, Hyper'}
        />
    </section>
  )
}

export default Projects;