import IconButton from "@mui/material/IconButton";
import Icons from "../Common/Icons";
import VerticalDivider from "../Common/VerticalDivider";
import Button from "@mui/material/Button";

const iconSize = 40 

interface ISideBar {
    anchor : string,
    mode : string
}

const Sidebar = ({anchor, mode}:ISideBar) => {
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
                                ['github', 'linkedin', 'twitter'].map((iconName)=>{
                                    return (
                                        <IconButton className="mt-4 ">
                                            <Icons type={iconName} size={iconSize}/>
                                        </IconButton>
                                    )
                                })
                            }
                        </>
                    ) : (
                        <div className="rotate-90 mb-24">
                            <Button 
                                className="text-lg lowercase text-zinc-800 font-thin"
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

export default Sidebar