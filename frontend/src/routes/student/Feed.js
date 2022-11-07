import * as React from 'react';
import { Outlet } from "react-router-dom";
import StudentList from '../../components/student/connect.component';
import Showcase from '../../components/student/showcase.component';

export default function Feed() {

  return (
    <>
    
    <div className='student_home bg-gray-100 min-h-screen'>
        <Showcase/>
        
        <StudentList/>
    </div>
    <Outlet />
    </>
  );
}
