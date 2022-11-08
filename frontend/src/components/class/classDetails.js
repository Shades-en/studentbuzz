import * as React from 'react';
import ClassProfile from './classProfile';
import ClubMembers from '../club/clubMembers';
import Achievements from '../general/achievementsList';
import Events from '../club/clubsEvents';
import { useState } from 'react';
import TaskList from '../club/taskList';
import ClubFeed from '../club/clubFeed';

const ClassDetails = () => {
    var tabs = { "members": true , "achievements": false, "events": false, "tasks": false, "feed": false};
    const [tab, setTab] = useState(tabs);

    return (  
        <>
            <div className='flex flex-col items-center justify-start bg-gray-100 min-h-screen'>
                <div className="flex flex-col w-full mr-20 mt-20 min-h-screen">
                    <ClassProfile setTab = {setTab} tab = {tab}/>

                    <div className="bg-white pb-6 flex-1">
                        <div className="container mt-0 mx-auto">
                            { tab?.members && <ClubMembers/>}
                            { tab?.achievements && <Achievements/>}
                            { tab?.events && <Events/>}
                            { tab?.tasks && <TaskList/>}
                            { tab?.feed && <ClubFeed/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ClassDetails;