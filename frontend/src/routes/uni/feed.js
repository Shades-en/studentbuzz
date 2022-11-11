import * as React from 'react';
import { Outlet } from "react-router-dom";
import UniversityList from '../../components/uni/connectUni';
import UniShowcase from '../../components/general/showcase.component';

export default function Feed() {

  return (
    <>
    <div className='student_home bg-gray-100 min-h-screen'>
        <UniShowcase/>
        <UniversityList/>
    </div>
    <Outlet />
    </>
  );
}