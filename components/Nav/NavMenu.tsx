import NavLink from "./NavLink";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useStateStore } from "../../store/useStore";

const NavMenu = () => {

  const toggleSideBar = useStateStore(state => state.toggleSideBar);
  const setToggleSideBar = useStateStore(state => state.setToggleSideBar);

  function onClickHandeller(){
    setToggleSideBar(!toggleSideBar)
  }
  
  return (
    <div className="h-screen lg:h-0">
      <ul className={`flex items-center justify-between flex-col
        lg:space-y-0 lg:space-x-9 lg:flex-row lg:items-center pt-40 lg:pt-0`
      }>
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
              className="text-xl px-8 py-3 bg-white text-slate-700 font-medium 
                capitalize  hover:bg-slate-700 hover:text-slate-100 
                rounded-md shadow-md 
                lg:text-sm
                " 
              variant="contained"
              onClick={()=>{
                onClickHandeller();
              }}
            >
              Get My CV
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu