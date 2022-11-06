import { Outlet } from "react-router-dom"
import "./radio_group.css"
import List from "./list_search.component";
import { useState } from "react";

const RadioGroup = () => {
    
    const[click, setClick] = useState(false);

    return (
        <>
            <div className="radio_container">
                <div className="grid min-h-[50px] mx-5 scroll-mt-48 place-items-center overflow-x-scroll rounded-lg border-indigo-500 bg-[#f8fafc] p-2 lg:overflow-visible w-[700px] mx-auto">
                    <form className="radio_form">
                        <input type="radio" id="student" name="search_type" value="student" className="button-gradient radio_color" data-ripple-light="true" onClick={() => setClick(true)}></input>
                        <label htmlFor="student" style={{"paddingRight":"1.5em","paddingLeft":"0.5em"}}>Student</label>
                        <input type="radio" id="faculty_or_hod" name="search_type" value="faculty_or_hod" className="button-gradient radio_color" data-ripple-light="true" onClick={() => setClick(true)}></input>
                        <label htmlFor="faculty_or_hod" style={{"paddingRight":"1.5em","paddingLeft":"0.5em"}}>Faculty or HOD</label>
                        <input type="radio" id="clubs" name="search_type" value="clubs" className="button-gradient radio_color" data-ripple-light="true" onClick={() => setClick(true)}></input>
                        <label htmlFor="clubs" style={{"paddingRight":"1.5em","paddingLeft":"0.5em"}}>Clubs</label>
                        <input type="radio" id="university" name="search_type" value="university" className="button-gradient radio_color" data-ripple-light="true"></input>
                        <label htmlFor="university" style={{"paddingLeft":"0.5em"}}>University</label>
                    </form>
                </div>
                
            </div>
            {click? <List></List>:null } 
            <Outlet />
        </>
     );
}
 
export default RadioGroup;