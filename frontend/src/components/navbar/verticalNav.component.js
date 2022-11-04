import * as React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Outlet } from 'react-router-dom';
import '../../routes/studentHome/studHome.css'

const NavVertical = () => {
  return ( 
    <>
      <Sidebar>
      <Menu>
        <MenuItem> Search </MenuItem>
        <MenuItem> Notifications </MenuItem>
        <MenuItem> IDK </MenuItem>
        <MenuItem> IDK </MenuItem>
      </Menu>
    </Sidebar>
      <Outlet />
    </>
   );
}
 
export default NavVertical;