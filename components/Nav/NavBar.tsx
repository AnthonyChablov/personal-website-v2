import {useState, useEffect, useRef} from 'react';
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import logo from '../../assets/images/navbar-logo.png';
import SideDrawer from '../SideDrawer/SideDrawer';
import NavMenu from './NavMenu';
import useWindowWidth from '../../hooks/useWindowWidth';
import Icons from '../Common/Icons';
import { useStateStore } from '../../store/useStore';
import {  motion, useMotionValue, useScroll, useTransform, useMotionTemplate } from "framer-motion";

/* Framer motion animations */
const navigationLinksVariants={
  hidden:{
    opacity: 0,
    y: -50
  },
  visible:{
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
      ease: 'easeInOut'
    }
  }
}

let clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const NavBar = () => {

  /* State */
  const setToggleSideBar = useStateStore(state => state.setToggleSideBar);
  const [ color, setColor ] = useState(false); /* Setting Nav Color onScrollDown*/
  const [show, setShow] = useState(true); /* Setting Nav Bar disappear onScrollDown */
  
  /* Scroll position */
  const [lastScrollY, setLastScrollY] = useState(0);

  /* Detect Window width resize */
  const windowWidth = useWindowWidth();

  useEffect(()=>{

    function changeColor(){
      (window.scrollY >= 90)
        ? setColor(true)
        : setColor(false);
    }

    window.addEventListener('scroll', changeColor);

    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(false); 
    } else { // if scroll up show the navbar
      setShow(true);  
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  
  },[lastScrollY]);



  

  function useBoundedScroll(bounds) {
    let { scrollY } = useScroll();
    let scrollYBounded = useMotionValue(0);
    let scrollYBoundedProgress = useTransform(
      scrollYBounded,
      [0, bounds],
      [0, 1]
    );
  
    useEffect(() => {
      return scrollY.onChange((current) => {
        let previous = scrollY.getPrevious();
        let diff = current - previous;
        let newScrollYBounded = scrollYBounded.get() + diff;
  
        scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
      });
    }, [bounds, scrollY, scrollYBounded]);
  
    return { scrollYBounded, scrollYBoundedProgress };
  }

  let { scrollYBoundedProgress } = useBoundedScroll(400);
  let scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );

  return (
    <>
      <motion.nav className={` px-4 py-3 lg:px-20 mx-auto flex justify-between 
        items-center lg:items-baseline sticky top-0 z-50 
        ${!show && 'hidden'}
        ${color && 'backdrop-blur bg-zinc-100/90 shadow-2xl '}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          variants={navigationLinksVariants}
          initial={'hidden'}
          animate={'visible'}
          style={{
            scale: useTransform(
              scrollYBoundedProgressThrottled,
              [0, 1],
              [1, 0.9]
            ),
          }}
        >
          <Link href="/">
            <IconButton>
              <Image 
                src={logo} 
                alt='logo' 
                width={62}
                height={0}
              ></Image>
            </IconButton>
          </Link>
        </motion.div>
       
        {
          ( windowWidth >= 1023 ) 
            ? (<NavMenu/>) 
            : (
                <IconButton 
                  onClick={() => { 
                    setToggleSideBar(true);
                }}>
                  <Icons type={'menu'} size={30} />
                </IconButton>
              )
        }
      </motion.nav>
      { ( windowWidth <= 1023 ) && <SideDrawer /> }
    </>
  )
}

export default NavBar