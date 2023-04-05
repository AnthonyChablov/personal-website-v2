import React from 'react'
import Link from 'next/link'

interface INavLink {
    text: string,
    linkTo: string
}

const NavLink = ({text, linkTo}:INavLink) => {
  return (
    <li className=' text-sm text-slate-700 font-normal hover:underline'>
        <Link href={linkTo} scroll={false}>
            {text}
        </Link>
    </li>
  )
}

export default NavLink