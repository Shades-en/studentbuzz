import * as React from 'react';
import ClassProfile from './classProfile';
import ClassMembers from './classMembers';
import { useState } from 'react';
import ClassFeed from '../general/groupFeed';

const ClassDetails = () => {
    var tabs = { "members": true, "feed": false};
    const [tab, setTab] = useState(tabs);

    return (  
        <>
            <div className='flex flex-col items-center justify-start bg-gray-100 min-h-screen'>
                <div className="flex flex-col w-full mr-20 mt-20 min-h-screen">
                    <ClassProfile setTab = {setTab} tab = {tab}/>

                    <div className="bg-white pb-6 flex-1">
                        <div className="container mt-0 mx-auto">
                            { tab?.members && <ClassMembers/>}
                            { tab?.feed && <ClassFeed/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ClassDetails;