import Header from "../../Common/Header";
import ProjectCard from "./ProjectCard";
import soundScopeImg from "../../../assets/images/projects/sound-scope/soundScope.png";
import personalWebsite from "../../../assets/images/projects/personal-website/personalWebsite.png";
import todoList from "../../../assets/images/projects/todo-list/todolistImage.png";
import streetArtTo from "../../../assets/images/projects/street-art/street-art-to.png";
import betterMe from "../../../assets/images/projects/better-me/betterMe.png";

const Projects = () => {
  const projectData = [
    {
      project: "Featured Project",
      header: "Better.me",
      paragraph:
        "A Full Stack app for creation and management of mental health journals. Responsive, mobile-friendly, and SEO optimized for a seamless user experience.",
      madeWith:
        "Next.js, TypeScript, Tailwind CSS, Express.js, Node.js, MongoDB.",
      github:
        "https://github.com/AnthonyChablov/mental-health-journal-app/tree/new-changes",
      link: "https://mental-health-journal-app.vercel.app/",
      img: betterMe,
    },
    {
      project: "Featured Project",
      header: "Sound-Scope",
      paragraph:
        "A Spotify Profile Viewer that allows users to view their top tracks, artists, recently played songs, and playlists. The app can suggest songs based on existing playlists and can create new playlists accordingly within the users account.",
      madeWith: "Next.js, TypeScript, Tailwind CSS, Material UI.",
      github: "https://github.com/AnthonyChablov/sound-scope",
      link: "https://sound-scope-anthonychablov.vercel.app/",
      img: soundScopeImg,
    },
    {
      project: "Featured Project",
      header: "Street-Art-To",
      paragraph:
        "An application that displays locations of street-art and murals across Toronto, Canada. Users can search for street-art and filter by various parameters.",
      madeWith:
        "React.js, TypeScript, Firebase, Tailwind CSS, Material UI, Leaflet, Framer-Motion.",
      github: "https://github.com/AnthonyChablov/street-art-to",
      link: "https://street-art-to-ada52.web.app/",
      img: streetArtTo,
    },
    {
      project: "Featured Project",
      header: "Personal Portfolio Website",
      paragraph:
        "A fully-responsive, mobile-friendly, SEO-friendly portfolio website with darkmode toggle functionality and scroll-down animations.",
      madeWith: "Next.js, TypeScript, Tailwind CSS, Material UI.",
      github: "https://github.com/AnthonyChablov/personal-website-v2",
      link: "https://www.anthonychablov.com/",
      img: personalWebsite,
    },
  ];

  return (
    <section className="text-center tracking-wide mb-10 pt-16" id="projects">
      <div className="flex items-center justify-center">
        <Header title={"02. My Projects"} />
      </div>
      <div className="space space-y-16">
        {projectData.map((elem, i) => {
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
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
