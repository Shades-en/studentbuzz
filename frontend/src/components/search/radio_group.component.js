import { Outlet } from "react-router-dom";
import "./radio_group.css"

const RadioGroup = () => {

    return (
        <>
            <div className="radio_container">
                <div className="grid min-h-[50px] mx-5 scroll-mt-48 place-items-center overflow-x-scroll rounded-lg border-blue-grey-50 bg-[#f8fafc] p-2 lg:overflow-visible w-[400px] mx-auto">
                    <form className="radio_form">
                        <input type="radio" id="student" name="search_type" value="student" className="button-gradient radio_color" data-ripple-light="true"></input>
                        <label htmlFor="student" style={{"paddingRight":"1.5em","paddingLeft":"0.5em"}}>Student</label>
                        <input type="radio" id="faculty_or_hod" name="search_type" value="faculty_or_hod" className="button-gradient radio_color" data-ripple-light="true"></input>
                        <label htmlFor="faculty_or_hod" style={{"paddingRight":"1.5em","paddingLeft":"0.5em"}}>Faculty or HOD</label>
                        <input type="radio" id="clubs" name="search_type" value="clubs" className="button-gradient radio_color" data-ripple-light="true"></input>
                        <label htmlFor="clubs" style={{"paddingLeft":"0.5em"}}>Clubs</label>
                    </form>
                </div>
                
            </div> 
            <Outlet />
        </>
     );
}
 
export default RadioGroup;