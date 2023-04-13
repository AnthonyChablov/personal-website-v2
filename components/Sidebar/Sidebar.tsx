import IconButton from "@mui/material/IconButton";
import Icons from "../Common/Icons";
import VerticalDivider from "../Common/VerticalDivider";
import Button from "@mui/material/Button";
import Link from "next/link";

interface ISideBar {
    anchor : string,
    mode : string
}

const linkData = [
    {icon :'github', link: 'https://github.com/AnthonyChablov'},
    {icon :'linkedin', link: 'https://www.linkedin.com/in/anthonychablov/'},
    {icon :'twitter', link: 'https://github.com/AnthonyChablov'}
];

const Sidebar = ({anchor, mode}:ISideBar) => {

    const iconSize = 25;

    return (
        <div className={`fixed bottom-0 h-fit 
            ${(anchor === 'left') && 'left-20'} 
            ${(anchor === 'right') && 'right-0'}`
        }>
            <div className="flex flex-col items-center justify-center">
                {
                    (mode === 'icons') 
                        ? (
                            <>
                                {
                                    linkData.map((linkName, i)=>{
                                        return (
                                            <Link href={linkName.link} key={i}>
                                                <IconButton  className="mt-4 ">
                                                    <Icons type={linkName.icon} size={iconSize}/>
                                                </IconButton>
                                            </Link>
                                        )
                                    })
                                }
                            </>
                        ) : (
                            <div className="rotate-90 mb-20">
                                <Button 
                                    className="text-sm lowercase text-zinc-700"
                                    variant='text'
                                >
                                    <a href="mailto: abc@example.com  ">
                                        aechablov@gmail.com
                                    </a>
                                </Button>
                            </div>
                        )
                }
            </div>
            <VerticalDivider/>
        </div>
    )
}

export default Sidebar;