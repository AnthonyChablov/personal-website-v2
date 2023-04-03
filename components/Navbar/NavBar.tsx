import Link from "next/link";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from '../../assets/images/navbar-logo.png';

const NavBar = () => {
  return (
    <nav className="flex w-screen justify-between items-center px-5 py-10">
      <Link href="/">
        <Image 
          src={logo} 
          alt='logo' 
          width={65}
          height={0}
        ></Image>
      </Link>
      <Link href="/">
        <Button 
          className="bg-white hover:bg-slate-700 hover:text-slate-100
            rounded-md shadow-md text-slate-900 font-medium capitalize px-8 py-3" 
          variant="contained">
            Get My CV
        </Button>
      </Link>
    </nav>
  )
}

export default NavBar