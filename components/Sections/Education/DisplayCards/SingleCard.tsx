import { motion } from "framer-motion"
import Icons from "../../../Common/Icons"
import Button from "@mui/material/Button"

interface IDisplayCard{
    id:number,
    icon:string,
    iconSize: number
}


const DisplayCard = ({id, icon, iconSize, }:IDisplayCard) => {

  const skillCardVariants={
    hidden:{
        opacity: 0,
        y: id % 2 === 0 ? -25 : -10,
        x: id % 2 === 0 ? -10 : 10
    },
    visible:{
        opacity: 1,
        y: 0,
        x:0,
        transition: {
        duration: 0.5,
        delay: 0.1 * id,
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
      <Button className=" 
          flex flex-col items-center bg-slate-200 
          rounded-lg cursor-default w-full p-6 shadow-md"
          variant="outlined"
      >
          <Icons type={icon} size={iconSize}/>
          <div className="w-full mt-2">
              <p className="text-md text-slate-600 capitalize">{icon}</p>
          </div>
      </Button>
    </motion.div>
  )
}

export default DisplayCard