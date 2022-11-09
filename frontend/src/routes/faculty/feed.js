import * as React from 'react';
import { Outlet } from "react-router-dom";
import FacultyList from '../../components/faculty/connectFac';
import FacultyShowcase from '../../components/general/showcase.component';

export default function Feed() {

  return (
    <>
    
    <div className='student_home bg-gray-100 min-h-screen'>
        <FacultyShowcase/>  
        <FacultyList/>
    </div>
    <Outlet />
    </>
  );
}
