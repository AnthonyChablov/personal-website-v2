import {useState, useEffect} from 'react';
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import logo from '../../assets/images/navbar-logo.png';
import SideDrawer from '../SideDrawer/SideDrawer';
import NavMenu from './NavMenu';
import useWindowSize from '../../hooks/useWindowWidth';
import Icons from '../Common/Icons';
import { useStateStore } from '../../store/useStore';

const NavBar = () => {

  /* State */
  const toggleSideBar = useStateStore(state => state.toggleSideBar);
  const setToggleSideBar = useStateStore(state => state.setToggleSideBar);
  const windowWidth = useStateStore(state => state.windowWidth);
  /* Setting Nav Color onScrollDown*/
  const [ color, setColor ] = useState(false);
  
  /* Setting Nav Bar disappear onScrollDown */
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  function changeColor(){
    (window.scrollY >= 90)
      ? setColor(true)
      : setColor(false);
  }

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeColor);

      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  },[]);

  

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  
  return (
    <>
      <nav className={` px-4 py-3 lg:px-20 mx-auto flex justify-between 
        items-center lg:items-baseline sticky top-0 z-50 
        ${!show && 'hidden'}
        ${color && 'backdrop-blur bg-zinc-100/90 shadow-2xl '}`}
        
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
      </nav>
      { ( windowWidth <= 1023 ) && <SideDrawer /> }
    </>
  )
}

export default NavBar