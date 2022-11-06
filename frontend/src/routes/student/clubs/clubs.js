import * as React from 'react';
import { Outlet } from "react-router-dom";
import CreateClub from '../../../components/club/createClub';
import ClubList from '../../../components/club/clubList';


export default function Clubs() {

  return (
    <>
        <div className='flex flex-col items-end justify-start bg-gray-100 min-h-screen'>
            <div className='w-10/12 flex flex-col'>
                <CreateClub/>
                <ClubList/>
            </div>
        </div>
        <Outlet />
    </>
  );
}
