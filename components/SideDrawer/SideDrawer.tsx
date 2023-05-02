import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import useWindowWidth from '../../hooks/useWindowWidth';
import Icons from '../Common/Icons';
import NavMenu from '../Nav/NavMenu';
import { useStateStore } from '../../store/useStore';

const SideDrawer = () => {

    /* State */
    const toggleSideBar = useStateStore(state => state.toggleSideBar);
    const setToggleSideBar = useStateStore(state => state.setToggleSideBar);
    const theme = useStateStore(state => state.theme);

    /* Hooks */
    const windowWidth = useWindowWidth();

    /* Vars */
    const drawerWidth = windowWidth <= 500 ? '100%' : '70%';
    const color = (theme === 'dark') ? '#0f172a' : '#f4f4f5';
    
    return (
      <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                backgroundColor: color,
            },
        }}
        variant="persistent"
        anchor={ 'right'}
        open={toggleSideBar}
      >
        <div className="px-10 relative flex flex-col justify-between ">
          <div >
            <div className="fixed right-4 top-5">
              <IconButton onClick={()=>{
                setToggleSideBar(!toggleSideBar);
              }}>
                <Icons type='close' size={30}/>
              </IconButton>
            </div>
            <NavMenu />
          </div>
        </div>
      </Drawer>
    )
  }
  
  export default SideDrawer;