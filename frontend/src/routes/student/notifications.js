import * as React from 'react';
import { Outlet } from "react-router-dom";
// import StudentList from '../../components/student/connect.component';
import NotificationList from '../../components/notification/notificationList';
import NotificationDetail from '../../components/notification/notificationDetail';

const Notification = () => {
    return (  
        <>
            <div className='student_home bg-gray-100 min-h-screen '> 
                <NotificationList/>
                <div className='flex flex-col items-center mr-44 mt-20'>
                    <NotificationDetail/>
                    <NotificationDetail/>
                    <NotificationDetail/>
                    <NotificationDetail/>
                </div>
                
            </div>
            <Outlet />
        </>
    );
}
 
export default Notification;