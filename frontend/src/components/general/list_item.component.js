import { Link } from "react-router-dom";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import RestoreSharpIcon from '@mui/icons-material/RestoreSharp';

const ListItem = () => {
    return ( 
        <>
            <div className="flex justify-center items-center">
                <div className="job-box px-4 py-2 rounded-md d-md-flex align-items-center mx-3 justify-content-between w-full h-fit" style={{"marginBottom":"0.7em", "width": "25vw", "boxShadow": "0 0 10px 1px rgba(130, 130, 130, 0.2)"}}>
                    <div className="job-left my-2 w-full d-md-flex align-items-center justify-between flex-wrap">
                        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex" style={{"position":"relative"}}>
                        <img className="h-9 w-9 rounded-full" alt="John Doe's avatar"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                        </div>
                        <p className="text-center text-md-left" style={{"fontSize":"0.9em","fontWeight":"400","paddingLeft":"1em"}}>Mr. Bleh John</p>
                        <div className="job-content" style={{"display":"flex"}}>
                            
                            <p style={{"fontWeight":"400","fontSize":"0.9em"}}>1MS20IS081</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link>
                        {/* <RestoreSharpIcon className="text-indigo-500" /> */}
                    </Link>
                    <Link>
                        <DeleteSharpIcon style={{"color":"#F56565", "marginLeft":"1em", "fontSize": "1.2em"}}/>
                    </Link>
                </div>
                
            </div>
        
        </>
     );
}
 
export default ListItem;

