import {useState, useEffect} from 'react';
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import logo from '../../assets/images/navbar-logo.png';
import SideDrawer from '../SideDrawer/SideDrawer';
import NavMenu from './NavMenu';
import useWindowWidth from '../../hooks/useWindowWidth';
import Icons from '../Common/Icons';
import { useStateStore } from '../../store/useStore';
import { useAnimation, motion } from "framer-motion";

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
  
  return (
    <>
      <motion.nav className={` px-4 py-3 lg:px-20 mx-auto flex justify-between 
        items-center lg:items-baseline sticky top-0 z-50 
        ${!show && 'hidden'}
        ${color && 'backdrop-blur bg-zinc-100/90 shadow-2xl '}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
        {
          ( windowWidth >= 1023 ) 
            ? <NavMenu/> 
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