import { Outlet } from "react-router-dom";
import { NavbarContainer, NavbarContent, NavbarLink, NavbarLogo, Button } from "./navigation.styles";
import SchoolIcon from '@mui/icons-material/School';
import '../../routes/student/studHome.css'
import ProfileImage from "../../assets/images/images_studHome/profile_image.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";


const Navbar = (props) => {
  const {user, dispatch} = useAuthContext();
  useEffect(() => {
    console.log(user, "user")
  }, [])

    return (  
        <>
            <NavbarContainer>
              <NavbarLogo to='/' className=" flex justify-around items-center w-52">
                  <SchoolIcon fontSize="large" />
                  <div>
                      student<span className="text-indigo-500">B</span>uzZ
                  </div>
              </NavbarLogo>
        
              <NavbarContent  id="right_horizontal_nav">
                <div className="flex items-center justify-around w-40">
                  <div><img src={ProfileImage} className="w-8 rounded-full border-slate-700" alt="" /></div>
                  <div className="dropdown text-black">
                    <button className="btn text-black dropdown-toggle hover:bg-white border-none" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                      {props.username || 'My Profile'}
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="uni/profile">Profile</Link></li>
                      <li><Link className="dropdown-item" href="#">Settings</Link></li>
                      <li><Link className="dropdown-item" href="#">Sign Out</Link></li>
                    </ul>
                  </div>

                  
                </div>
              </NavbarContent>
            </NavbarContainer>
            <Outlet />
        </>
    );
}
 
export default Navbar;