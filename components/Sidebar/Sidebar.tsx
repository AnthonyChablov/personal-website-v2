import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";
import Icons from "../Common/Icons";
import VerticalDivider from "../Common/VerticalDivider";
import Button from "@mui/material/Button";
import Link from "next/link";

interface ISideBar {
    anchor : string,
    mode : string
}

const linkData = [
    {icon :'github', link: 'https://github.com/AnthonyChablov'},
    {icon :'linkedin', link: 'https://www.linkedin.com/in/anthonychablov/'},
    {icon :'twitter', link: 'https://github.com/AnthonyChablov'}
];


/* Framer motion animations */
const sidebarVariants={
    hidden:{
      opacity: 0,
      y: -10
    },
    visible:{
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: .8,
        ease: 'easeInOut'
      }
    }
  }

const Sidebar = ({anchor, mode}:ISideBar) => {

    const iconSize = 25;

    return (
        <motion.div className={`fixed bottom-0 h-fit 
            ${(anchor === 'left') && 'left-20'} 
            ${(anchor === 'right') && 'right-0'}`}
            variants={sidebarVariants}    
            initial="hidden"
            whileInView="visible"
        >
            <div className="flex flex-col items-center justify-center">
                {
                    (mode === 'icons') 
                        ? (
                            <>
                                {
                                    linkData.map((linkName, i)=>{
                                        return (
                                            <Link href={linkName.link} key={i}>
                                                <IconButton  className="mt-4 ">
                                                    <Icons type={linkName.icon} size={iconSize}/>
                                                </IconButton>
                                            </Link>
                                        )
                                    })
                                }
                            </>
                        ) : (
                            <div className="rotate-90 mb-20">
                                <Button 
                                    className="text-sm lowercase text-zinc-700"
                                    variant='text'
                                >
                                    <a href="mailto: abc@example.com  ">
                                        aechablov@gmail.com
                                    </a>
                                </Button>
                            </div>
                        )
                }
            </div>
            <VerticalDivider/>
        </motion.div>
    )
}

export default Sidebar;