import {AiFillHtml5, AiFillGithub, AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai';
import {DiCss3, DiSass, DiReact, DiNodejs, DiNpm, DiPython} from 'react-icons/di';
import {HiDatabase} from "react-icons/hi";
import {SiTypescript, SiJavascript, SiTailwindcss, SiFirebase} from 'react-icons/si';
import {TbExternalLink} from 'react-icons/tb';

interface IIcons {
    type : string,
    size: number,
}

const Icons = ({type, size}:IIcons) => {
  return (
    <div className='text-slate-700'>{
        {
            link : <TbExternalLink size={size}/>,
            twitter : <AiFillTwitterSquare size={size}/>,
            linkedin: <AiFillLinkedin size={size}/>,
            github: <AiFillGithub size={size}/>,
            html: <AiFillHtml5 size={size}/>,
            css: <DiCss3 size={size}/>,
            scss:<DiSass size={size}/>,
            react: <DiReact size={size}/>,
            nodeJS:<DiNodejs size={size}/>,
            npm: <DiNpm size={size}/>,
            python: <DiPython size={size}/>,
            database: <HiDatabase size={size}/>,
            javascript: <SiJavascript size={size}/>,
            tailwind: <SiTailwindcss size={size}/>,
            firebase: <SiFirebase size={size}/>,
            typescript: <SiTypescript size={size}/>,
        }[type]
    }</div>
  )
}

export default Icons