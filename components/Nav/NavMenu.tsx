import NavLink from "./NavLink";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useStateStore } from "../../store/useStore";
import { m } from "framer-motion";
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
    localStorage.setItem("theme-mode-ac", theme === 'dark' ? 'light' : 'dark');
  }
  
  return (
    <div className="h-screen lg:h-0 ">
      
      <m.ul className={`pt-40 flex items-center justify-between flex-col
          lg:space-y-0 lg:space-x-9 lg:flex-row lg:items-center lg:pt-0 lg:mt-2` 
        }
        variants={listVariants}
        initial='hidden'
        animate='show'
      >
        {/* Dark mode toggle */}
        <div className="mb-8 lg:mb-0">
          <IconButton onClick={ () => {
            onClickDarkModeToggle();
          }}> {
            theme === 'light'
              ? <Icons type="moon" size={25}/>
              : <Icons type="sun" size={25}/>
          }
          </IconButton>
        </div>
        
        {
          navigationLinks.map((link, i)=>{
            return (
              <m.div 
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
              </m.div>
            );
          })
        }
        <m.li
          variants={navigationLinksVariants}
          initial={'hidden'}
          animate={'visible'}
        >
          <Link href="/">
            <Button 
              className="text-xl px-8 py-3 bg-white text-slate-700 font-medium 
                capitalize  hover:bg-slate-700 hover:text-slate-100 
                rounded-md shadow-md lg:text-sm 
                dark:bg-slate-600 dark:text-slate-300 dark:hover:bg-slate-400 dark:hover:text-slate-700" 
              variant="contained"
              onClick={()=>{
                onClickToggleSidebar();
              }}
            >
              Get My CV
            </Button>
          </Link>
        </m.li>
      </m.ul>
    </div>
  )
}

export default NavMenu