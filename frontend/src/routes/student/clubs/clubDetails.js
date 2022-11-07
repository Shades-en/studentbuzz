import * as React from 'react';
import StudentList from '../../../components/student/connect.component';
import ClubProfile from '../../../components/club/clubProfile';
import ClubMembers from '../../../components/club/clubMembers';


const ClubDetails = () => {
    return (  
        <>
            <div className='flex flex-col items-center justify-start bg-gray-100 min-h-screen'>
                <div className="flex flex-col w-1/2 mr-48 mt-20 min-h-screen">
                    <ClubProfile/>

                    <div className="bg-white pb-6 flex-1">
                        <div className="container mt-0 mx-auto">
                            <ClubMembers/>
                        </div>
                    </div>
                </div>
                <StudentList/>
            </div>
        </>
    );
}
 
export default ClubDetails;