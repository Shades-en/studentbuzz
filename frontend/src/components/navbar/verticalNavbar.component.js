import { Outlet } from "react-router-dom"
import "../../routes/studentHome/studHome.css"

const VerticalNav = () => {
    return ( 
        <>
            <div className="min-h-screen flex flex-row bg-gray-100" id="nav_container">
            <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden" id="nav_contents">
                <ul className="flex flex-col py-4" id="nav_list">
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 onclick:">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                    <span className="text-sm font-medium hover:#6366f1">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-music"></i></span>
                    <span className="text-sm font-medium">Notifications</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span>
                    <span className="text-sm font-medium">Find your Partner</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
                    <span class="text-sm font-medium">Clubs</span>
                    </a>
                </li>
                </ul>
            </div>
            </div>
            <Outlet />
        </>
     );
}
 
export default VerticalNav;