import {AiFillHtml5, AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {DiCss3, DiSass, DiReact, DiNodejs, DiNpm, DiPython, DiMongodb} from 'react-icons/di';
import {HiDatabase} from "react-icons/hi";
import {SiTypescript, SiJavascript, SiTailwindcss, SiFirebase, SiNextdotjs} from 'react-icons/si';
import {TbExternalLink, TbSchool} from 'react-icons/tb';
import {BsSunFill, BsFillMoonFill} from 'react-icons/bs';
import { useStateStore } from '../../store/useStore';

interface IIcons {
    type : string,
    size: number,
}

const Icons = ({ type, size }:IIcons) => {

  const theme = useStateStore(state => state.theme);
  const color = (theme === 'dark') ? 'rgb(203 213 225)' : 'rgb(51 65 85)';

  return (
    <div className='text-slate-700'>{
        {
          moon : <BsFillMoonFill size={size} color={color} /> , 
          sun : <BsSunFill size={size} color={color}/> ,
          school: <TbSchool size={size} color={color}/> ,
          mongoDB: <DiMongodb size={size} color={color}/> ,
          next: <SiNextdotjs size={size} color={color}/> ,
          menu: <AiOutlineMenu size={size} color={color}/> ,
          close: <AiOutlineClose size={size} color={color}/>,
          link : <TbExternalLink size={size} color={color}/>,
          twitter : <AiFillTwitterSquare size={size} color={color}/>,
          linkedin: <AiFillLinkedin size={size} color={color}/>,
          github: <AiFillGithub size={size} color={color} />,
          html: <AiFillHtml5 size={size} color={color}/>,
          css: <DiCss3 size={size} color={color}/>,
          scss:<DiSass size={size} color={color}/>,
          react: <DiReact size={size} color={color} />,
          node:<DiNodejs size={size} color={color}/>,
          npm: <DiNpm size={size} color={color}/>,
          python: <DiPython size={size} color={color}/>,
          database: <HiDatabase size={size} color={color}/>,
          javascript: <SiJavascript size={size} color={color}/>,
          tailwind: <SiTailwindcss size={size} color={color}/>,
          firebase: <SiFirebase size={size} color={color}/>,
          typescript: <SiTypescript size={size} color={color}/>,
        }[type]
    }</div>
  )
}

export default Icons