import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from '../../assets/images/navbar-logo.png';

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
      <Link href="/">
        <Button 
          className="px-8 py-3 bg-white text-slate-700 font-medium 
          capitalize  hover:bg-slate-700 hover:text-slate-100 
          rounded-md shadow-md" 
          variant="contained">
            Get My CV
        </Button>
      </Link>
    </nav>
  )
}

export default NavBar