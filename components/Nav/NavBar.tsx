import {useState, useEffect} from 'react';
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import logo from '../../assets/images/navbar-logo.png';
import SideDrawer from '../SideDrawer/SideDrawer';
import NavMenu from './NavMenu';
import useWindowSize from '../../hooks/useWindowDimensions';
import Icons from '../Common/Icons';
import { useStateStore } from '../../store/useStore';

const NavBar = () => {

  /* Setting Mobile Nav */
  const toggleSideBar = useStateStore(state => state.toggleSideBar);
  const setToggleSideBar = useStateStore(state => state.setToggleSideBar);
  
  /* Setting Nav Color onScrollDown*/
  const [ color, setColor ] = useState(false);
  
  /* Setting Window Width */
  const windowWidth = (typeof window !== 'undefined') ? useWindowSize().width : 0;

  function changeColor(){
    (window.scrollY >= 90)
      ? setColor(true)
      : setColor(false);
  }

  useEffect(()=>{
    window.addEventListener('scroll', changeColor);
  },[]);
  
  return (
    <>
      <nav className={` px-4 py-3 mx-auto flex justify-between 
        items-center lg:items-baseline sticky top-0 z-50 ${color && 'backdrop-blur bg-zinc-100/90 shadow-xl'}`}
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