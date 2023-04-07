import Button from "@mui/material/Button";
import Icons from "../../../Common/Icons";

interface IWideCard {
    icon: string,
    iconSize: number,
    title: string  
}

const WideCard = ({icon, iconSize, title}:IWideCard) => {
  return (
    <Button className="flex flex-row items-center bg-slate-200 
        rounded-lg cursor-default w-full px-8 py-8 shadow-md"
        variant="outlined"
    >
        <Icons type={icon} size={iconSize}/>
        <div className="w-full mt-2">
            <p className="text-md text-slate-600 capitalize">{title}</p>
        </div>
    </Button>
  )
}

export default WideCard