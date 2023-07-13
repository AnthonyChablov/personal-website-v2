import Button from "@mui/material/Button";
import  IconButton  from "@mui/material/IconButton";
import Icons from "../Common/Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <>
        <div className=" text-center mt-60  ">
        <Link href={'https://github.com/AnthonyChablov'} target="_blank">
            <Button className="text-sm capitalize font-light text-slate-800 p-2 dark:text-slate-300"
                variant='text'
            >
                Created & Built By Anthony Chablov    
            </Button>
        </Link >
        </div>
        <div className="text-center xl:hidden">
            <Link href={'https://github.com/AnthonyChablov'} target="_blank">
                <IconButton >
                    <Icons type="github" size={30}/>
                </IconButton>
            </Link>
            <Link href={'https://www.linkedin.com/in/anthonychablov/'} target="_blank">
                <IconButton >
                    <Icons type="linkedin" size={32}/>
                </IconButton>
            </Link>
            <Link href={'https://leetcode.com/AnthonyChablov/'} target="_blank">
                <IconButton >
                    <Icons type="leetcode" size={26}/>
                </IconButton>
            </Link>
        </div>
        
    </>
  )
}

export default Footer;