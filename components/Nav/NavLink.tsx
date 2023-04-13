import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useStateStore } from '../../store/useStore'


interface INavLink {
    text: string,
    linkTo: string
}

/* framer motion animations */
const navigationLinksVariants={
  hidden:{
    opacity: 0,
    y: -50
  },
  visible:{
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: 'easeInOut'
    }
  }
}

const NavLink = ({text, linkTo}:INavLink) => {

  const toggleSideBar = useStateStore(state => state.toggleSideBar);
  const setToggleSideBar = useStateStore(state => state.setToggleSideBar);

  return (
    <motion.li className=' text-2xl lg:text-sm text-slate-700 font-normal hover:underline pb-10 lg:pb-0'
      variants={navigationLinksVariants}
      initial='hidden'
      animate='visible'
      onClick={()=>{
        setToggleSideBar(!toggleSideBar);
      }}
    >
        <Link href={linkTo} scroll={false}>
            {text}
        </Link>
    </motion.li>
  );
}

export default NavLink