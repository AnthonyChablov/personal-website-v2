import {motion} from 'framer-motion';
import Button from "@mui/material/Button";
import Icons from "../../../Common/Icons";

interface IWideCard {
    icon: string,
    iconSize: number,
    title: string,
    description:string,
}

const WideCard = ({icon, iconSize, title, description}:IWideCard) => {

  const skillCardVariants={
    hidden:{
        opacity: 0,
        y: -25 ,
        x: -10 
    },
    visible:{
        opacity: 1,
        y: 0,
        x:0,
        transition: {
        duration: 0.5,
        delay: 0.1 ,
        ease: 'easeInOut'
        }
    }
  }

  return (
    <motion.div 
      variants={skillCardVariants}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true }}
    >
      <Button className="flex flex-col items-center bg-slate-200
        rounded-lg cursor-default w-full p-10 shadow-md dark:bg-slate-900"
        variant="outlined"
      >
          <Icons type={icon} size={iconSize}/>
          <div className="w-full mt-4"> 
              <p className="text-xl font-semibold text-slate-600 capitalize dark:text-slate-300">{title}</p>
              <p className="mt-4 text-md font-medium text-slate-600 capitalize dark:text-slate-500">{description}</p>
          </div>
      </Button>
    </motion.div>
  )
}

export default WideCard