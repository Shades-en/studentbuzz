import { Outlet } from "react-router-dom";

const ListItem = () => {
    return ( 
        <>
        <div className="job-box d-md-flex align-items-center justify-content-between mb-30" style={{"marginBottom":"0.7em"}}>
            <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex" style={{"position":"relative"}}>
                <img className="h-9 w-9 rounded-full" alt="John Doe's avatar"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                </div>
                <div className="job-content" style={{"display":"flex"}}>
                    <p className="text-center text-md-left" style={{"fontSize":"0.9em","fontWeight":"400","paddingLeft":"1em"}}>Mr. Bleh John</p>
                    <p style={{"fontWeight":"400","paddingLeft":"13em","fontSize":"0.9em"}}>CSE Department</p>
                </div>
            </div>
        </div>
            < Outlet />
        </>
     );
}
 
export default ListItem;