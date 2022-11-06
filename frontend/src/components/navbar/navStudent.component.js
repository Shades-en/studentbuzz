import { Outlet } from "react-router-dom";
import { NavbarContainer, NavbarContent, NavbarLink, NavbarLogo, Button } from "./navigation.styles";
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import '../../routes/student/studHome.css'
import ProfileImage from "../../assets/images/images_studHome/profile_image.png";
import { Link } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const Navbar = () => {
    return (  
        <>
            <NavbarContainer>
              <NavbarLogo to='/' className=" flex justify-around items-center w-52">
                  <SchoolIcon fontSize="large" />
                  <div>
                      student<span className="text-indigo-500">B</span>uzZ
                  </div>
              </NavbarLogo>
              {/* <NavbarContent className="w-96" id="right_horizontal_nav">
                <div className="border-solid border-slate-300 rounded-md border-2 p-1">
                  <input type="text" placeholder="Search..." className="w-72 outline-none" />
                  <Link> <SearchIcon color="#6366f1" /> </Link>
                </div>
              </NavbarContent> */}
              <NavbarContent  id="right_horizontal_nav">
                <div className="flex items-center justify-around w-40">
                  <div><img src={ProfileImage} className="w-8 rounded-full border-slate-700" alt="" /></div>
                  <div className="dropdown text-black">
                    <button className="btn text-black dropdown-toggle hover:bg-white border-none" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                      Owais Iqbal
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Profile</a></li>
                      <li><a className="dropdown-item" href="#">Settings</a></li>
                      <li><a className="dropdown-item" href="#">Sign Out</a></li>
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