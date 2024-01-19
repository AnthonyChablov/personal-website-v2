import Header from "../../Common/Header";
import SingleCard from "./DisplayCards/SingleCard";
import WideCard from "./DisplayCards/WideCard";

const skills = [
  { icon: "javascript", iconSize: 40 },
  { icon: "typescript", iconSize: 40 },
  { icon: "react", iconSize: 40 },
  { icon: "next", iconSize: 40 },
  { icon: "html", iconSize: 40 },
  { icon: "css", iconSize: 40 },
  { icon: "scss", iconSize: 40 },
  { icon: "tailwind", iconSize: 40 },
  { icon: "node", iconSize: 40 },
  { icon: "firebase", iconSize: 40 },
  { icon: "mongoDB", iconSize: 40 },
  { icon: "github", iconSize: 40 },
];

const Education = () => {
  return (
    <section className="text-center tracking-wide mb-10 pt-16" id="education">
      <div className="flex items-center justify-center">
        <Header title="03. Skills & Education" />
      </div>
      <p className="text-lg font-light text-left text-slate-800 dark:text-slate-300">
        As a Full-Stack developer, I have developed a diverse set of skills that
        enable me to create beautiful and functional websites and web
        applications.
        <br></br>
        <br></br>
        My key skills and education include:
      </p>

      {/* Skills */}
      <div
        className="text-left mx-auto grid grid-cols-1 xxs:grid-cols-2 grid-rows-3 gap-11
        sm:grid-cols-3 md:grid-cols-4 mt-16"
      >
        {skills.map((skill, i) => {
          return (
            <div key={i}>
              <SingleCard id={i} icon={skill.icon} iconSize={skill.iconSize} />
            </div>
          );
        })}
      </div>
      {/* Education */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-11">
        <WideCard
          icon="school"
          iconSize={40}
          title="University Of Waterloo"
          description={
            "Faculty Of Environment - Honours Bachelors Geography and Environmental Management"
          }
        />
        <WideCard
          icon="school"
          iconSize={40}
          title="Seneca College"
          description={
            "Faculty of Software Development - Computer Programming and Analysis"
          }
        />
      </div>
    </section>
  );
};

export default Education;
