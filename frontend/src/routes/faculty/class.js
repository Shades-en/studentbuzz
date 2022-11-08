import * as React from 'react';
import CreateClass from '../../components/class/createClass';
import ClassDetails from '../../components/class/classDetails';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Class() {

    const  [hasClass, setHasClass] = useState(false);
    useEffect(() => {
        setHasClass(true);
    }, []);
    return (
        <>
            <div className='flex flex-col items-end justify-start bg-gray-100 min-h-screen'>
                <div className='flex flex-col' style={{"width": "80%"}}>
                    { !hasClass && <CreateClass/>}
                    { hasClass && <ClassDetails/>}
                </div>
            </div>
        </>
    );
}
