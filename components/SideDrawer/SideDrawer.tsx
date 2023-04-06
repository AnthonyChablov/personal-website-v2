import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import useWindowSize from '../../hooks/useWindowDimensions';
import Icons from '../Common/Icons';
import NavMenu from '../Nav/NavMenu';
import { useStateStore } from '../../store/useStore';



const SideDrawer = () => {

    const windowWidth = (typeof window !== 'undefined') ? useWindowSize().width : 0;
    const drawerWidth = windowWidth <= 500 ? '100%' : '70%';

    const toggleSideBar = useStateStore(state => state.toggleSideBar);
    const setToggleSideBar = useStateStore(state => state.setToggleSideBar);
    
    return (
      <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                backgroundColor:'#f4f4f5',
            }
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