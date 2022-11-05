import { Outlet } from "react-router-dom"
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import React, { useEffect, useState } from 'react';


const SidebarStud = () => {
    const nav = {
        clubs: false,
        feed: true,
        notif: false,
        search: false,
    } 
    
    const [active, setActive] = useState(nav);

    function changeActive() {
        Object.keys(nav).forEach(key => {
            nav[key] = false;
        })
        nav[localStorage.getItem("active")] = true;
        setActive(nav);
        var activeElement = document.getElementById(localStorage.getItem("active"));
        var grandparent = activeElement.parentElement.parentElement;
        document.querySelectorAll('.sidebar-cat').forEach((el) => {
            el.classList.remove('bg-white');
            el.classList.add('hover:translate-x-2')
        })
        grandparent.classList.add(['bg-white']);
        grandparent.classList.remove(['hover:translate-x-2']);
    }

    useEffect(() => {
        changeActive();
    }, [])


    function handleActive (event) {
        const {id} = event.currentTarget;
        localStorage.setItem('active', id);
        changeActive();
    }


    return ( 
        <>
            <div className="min-h-screen flex flex-row bg-gray-100 fixed left-0 shadow-2xl" id="nav_container">
                <div className="flex flex-col mt-5 w-56  ">
                    <ul className="flex flex-col py-4" id="nav_list">
                    <li >
                        <a href="#" className="sidebar-cat flex flex-row items-center h-12 transition-transform ease-in duration-200 bg-white transform text-gray-500 hover:text-gray-800 " >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium hover:#6366f1 flex items-center justify-start"> <FeedOutlinedIcon fontSize="small" className="text-indigo-500 mr-3"/> <div onClick={handleActive} id="feed" >Feed</div>
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-cat flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium hover:#6366f1 flex items-center justify-start"> <EmailOutlinedIcon fontSize="small" className="text-indigo-500 mr-3"/> <div onClick={handleActive} id="notif">Notifications</div> </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-cat flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium hover:#6366f1 flex items-center justify-start"> <PersonSearchOutlinedIcon fontSize="small" className="text-indigo-500 mr-3"/> <div onClick={handleActive} id="search">Find Partner</div> </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-cat flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium hover:#6366f1 flex items-center justify-start"> <Diversity1OutlinedIcon fontSize="small" className="text-indigo-500 mr-3"/> <div onClick={handleActive} id="clubs"> Clubs</div> </span>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    );
}
 
export default SidebarStud;