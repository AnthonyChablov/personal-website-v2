import NavLink from "./NavLink";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useStateStore } from "../../store/useStore";
import { motion } from "framer-motion";
import Icons from "../Common/Icons";

const navigationLinks= [
  {text: '01. About Me', linkTo: '#about'}, 
  {text:'02. My Projects', linkTo: '#projects'}, 
  {text: '03. Education', linkTo : '#education'}, 
  {text : '04. Contact', linkTo: '#contact'}
]

/* Framer Motion animations */
const listVariants ={
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      duration: 0.25,
      delay: 0.15,
      ease: 'easeInOut',
      staggerChildren: 0.4
    }
  }
}

const navigationLinksVariants={
  hidden:{
    opacity: 0,
    y: -50
  },
  visible:{
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.45,
      ease: 'easeInOut'
    }
  }
}

const NavMenu = () => {

  const toggleSideBar = useStateStore(state => state.toggleSideBar);
  const setToggleSideBar = useStateStore(state => state.setToggleSideBar);
  const setTheme = useStateStore(state => state.setTheme);
  const theme = useStateStore(state => state.theme);

  function onClickToggleSidebar(){
    setToggleSideBar(!toggleSideBar);
  }

  function onClickDarkModeToggle(){
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  
  return (
    <div className="h-screen lg:h-0 ">
      
      <motion.ul className={`pt-40 flex items-center justify-between flex-col
        lg:space-y-0 lg:space-x-9 lg:flex-row lg:items-center lg:pt-0` }
        variants={listVariants}
        initial='hidden'
        animate='show'
      >
        {/* Dark mode toggle */}
        <IconButton onClick={ () => {
          onClickDarkModeToggle();
        }}> {
          theme === 'light'
            ? <Icons type="sun" size={25}/>
            : <Icons type="moon" size={25}/>
        }
          
        </IconButton>
        {
          navigationLinks.map((link, i)=>{
            return (
              <motion.div 
                key={i}
                variants={navigationLinksVariants}
                initial={'hidden'}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    delay: 0.13 * i,
                    ease: 'easeInOut'
                  }
                }}
              >
                <NavLink 
                  text={link.text} 
                  linkTo={link.linkTo}
                />
              </motion.div>
            );
          })
        }
        <motion.li
          variants={navigationLinksVariants}
          initial={'hidden'}
          animate={'visible'}
        >
          <Link href="/">
            <Button 
              className="text-xl px-8 py-3 bg-white text-slate-700 font-medium 
                capitalize  hover:bg-slate-700 hover:text-slate-100 
                rounded-md shadow-md 
                lg:text-sm
                " 
              variant="contained"
              onClick={()=>{
                onClickToggleSidebar();
              }}
            >
              Get My CV
            </Button>
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  )
}

export default NavMenu