import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from '../../assets/images/navbar-logo.png';
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
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
      <div className="">
        <ul className="flex items-center lg:space-x-9">
          {
            [
              {text: '01. About Me', linkTo: '#about'}, 
              {text:'02. My Projects', linkTo: '#projects'}, 
              {text: '03. Education', linkTo : '#education'}, 
              {text : '04. Contact', linkTo: '#contact'}
            ].map((link, i)=>{
              return (
                <NavLink 
                  key={i} 
                  text={link.text} 
                  linkTo={link.linkTo}
                />
              );
            })
          }
          <li>
            <Link href="/">
              <Button 
                className="px-8 py-3 bg-white text-slate-700 font-medium 
                capitalize  hover:bg-slate-700 hover:text-slate-100 
                rounded-md shadow-md" 
                variant="contained"
              >
                Get My CV
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar