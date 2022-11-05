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
                    <span className="text-sm font-medium hover:#6366f1">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-music"></i></span>
                    <span className="text-sm font-medium">Music</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span>
                    <span className="text-sm font-medium">Drink</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
                    <span class="text-sm font-medium">Shopping</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-chat"></i></span>
                    <span className="text-sm font-medium">Chat</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-user"></i></span>
                    <span className="text-sm font-medium">Profile</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-bell"></i></span>
                    <span className="text-sm font-medium">Notifications</span>
                    <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
                    <span className="text-sm font-medium">Logout</span>
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