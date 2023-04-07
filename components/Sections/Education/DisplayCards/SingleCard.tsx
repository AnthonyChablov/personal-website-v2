import Icons from "../../../Common/Icons"
import Button from "@mui/material/Button"

interface IDisplayCard{
    icon:string,
    iconSize: number,
}

const DisplayCard = ({icon, iconSize, }:IDisplayCard) => {
  return (
    <Button className="flex flex-col items-center bg-slate-200 
        rounded-lg cursor-default w-full p-4 shadow-md"
        variant="outlined"
    >
        <Icons type={icon} size={iconSize}/>
        <div className="w-full mt-2">
            <p className="text-md text-slate-600 capitalize">{icon}</p>
        </div>
    </Button>
  )
}

export default DisplayCard