import {AiFillHtml5, AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {DiCss3, DiSass, DiReact, DiNodejs, DiNpm, DiPython, DiMongodb} from 'react-icons/di';
import {HiDatabase} from "react-icons/hi";
import {SiTypescript, SiJavascript, SiTailwindcss, SiFirebase, SiNextdotjs} from 'react-icons/si';
import {TbExternalLink, TbSchool} from 'react-icons/tb';

interface IIcons {
    type : string,
    size: number,
}

const Icons = ({type, size}:IIcons) => {
  return (
    <div className='text-slate-700'>{
        {
          school: <TbSchool size={size}/>,
          mongoDB: <DiMongodb size={size}/>,
          next: <SiNextdotjs size={size}/>,
          menu: <AiOutlineMenu size={size}/>,
          close: <AiOutlineClose size={size}/>,
          link : <TbExternalLink size={size}/>,
          twitter : <AiFillTwitterSquare size={size}/>,
          linkedin: <AiFillLinkedin size={size}/>,
          github: <AiFillGithub size={size}/>,
          html: <AiFillHtml5 size={size}/>,
          css: <DiCss3 size={size}/>,
          scss:<DiSass size={size}/>,
          react: <DiReact size={size}/>,
          node:<DiNodejs size={size}/>,
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