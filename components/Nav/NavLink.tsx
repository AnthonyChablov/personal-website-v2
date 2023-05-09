import React from 'react'
import Link from 'next/link';
import { useStateStore } from '../../store/useStore'


interface INavLink {
    text: string,
    linkTo: string
}

const NavLink = ({text, linkTo}:INavLink) => {

  const toggleSideBar = useStateStore(state => state.toggleSideBar);
  const setToggleSideBar = useStateStore(state => state.setToggleSideBar);

  return (
    <li className=' text-2xl lg:text-sm text-slate-700 font-normal hover:underline pb-10 lg:pb-0 dark:text-slate-300'
      onClick={()=>{
        setToggleSideBar(!toggleSideBar);
      }}
    >
        <Link href={linkTo} scroll={false}>
            {text}
        </Link>
    </li>
  );
}

export default NavLink;