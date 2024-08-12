import './Header.css';
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBagAddOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Sidebar from './Sidebar';
const Header = () => {
    const [open, setOpen] = React.useState(false);

const toggleDrawer = (newOpen) => () => {
  setOpen(newOpen);
};

const DrawerList = (
  <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? "I" : "M"}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? "I" : "M"}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);
    return (  
    <div className="Header-main">
    <header className="p-3 header">
        <div className="container">
        <div className="df" style={{paddingLeft:"10vw",paddingRight:"10vw",width:"100vw",display:"flex",justifyContent:"space-between"}}>
            <Button onClick={toggleDrawer(true)}><span style={{fontSize:"30px",color:"white"}}><GiHamburgerMenu /></span></Button>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Sidebar />
            </Drawer>
            {/* <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
            </a> */}

            {/* <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"> */}
            {/* <li><a href="#" className="nav-link px-2 text-secondary"></a></li>
            <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
            <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
            <li><a href="#" className="nav-link px-2 text-white">About</a></li> */}
            {/* </ul> */}
            <div className="headerSearch">
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control  form-control-dark text-bg-dark " placeholder="Search..." aria-label="Search text-white"/>
            </form>
            </div>
            <div classsName="Header-icons">
            <div className="header-login flex gap-2">
                <span className="text-white text-2xl"><IoBagAddOutline /></span>
                <span className="text-white text-2xl"><CgProfile /></span>
            </div>
            </div>
            </div>
        </div>
        </div>
    </header>
    </div>  
    )
 }
 export default Header;