import { Link } from "react-router-dom";
// import UploadButton from "../upload/uploadButton";

const ClassProfile = ({setTab, classDeets, facName}) => {    

    var gotoClassStudents = () => {
        setTab({ "members": true , "feed": false});
    }

    var gotoFeed = () => {
        setTab({ "members": false , "feed": true});
    }

    return (  
        <>
            <div className="bg-white mt-0 shadow-xl px-10">
                <div className="container my-0 mx-auto">
                    <div className="flex flex-wrap py-8 flex-col sm:flex-row">
                        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 m-auto sm:m-0">
                            <img src="data:image/jpeg;base64,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" />
                        </div>
                        <h2 className="text-black text-2xl w-full mb-3 text-center sm:text-left mt-4 sm:mt-0">{classDeets?.name}</h2>
                        <div className="sm:p-2 flex-1">
                            
                            <div className="flex sm:justify-between flex-col items-center justify-center flex-wrap">
                                <div className="flex flex-wrap flex-col items-center justify-center md:w-auto w-full md:mb-0 mb-4">
                                    <div className="flex sm:w-auto w-full  justify-center">
                                        <span className="text-gray-600 mr-4 tracking-wider"><span className="text-gray-400">{classDeets?.students.length || 0}</span> Students</span>
                                    </div>
                                </div>
                              
                                
                            </div>
                            <div className="flex justify-center">
                                <h3 className="justify-center text-lg text-gray-500 font-semibold">Faculty : {facName || 'Faculty'}</h3>
                            </div>
                            
                        </div>
                        
                    </div>
                    {/*

                    
                    <div className="flex justify-center">
                        <input type={"button"} value={"Edit Profile"} className="mb-5 mt-1" style={{"padding":"0.6em","border":"0.5px solid #6366f1","borderRadius":"8px"}} data-bs-toggle="modal" data-bs-target="#editClubModal" data-bs-whatever="@getbootstrap"></input>
                    </div>
    */}
                </div>
                <div className="flex justify-center border-y-2 border-gray-200  py-5">
                    <Link className="text-gray-600 mx-5 hover:text-indigo-500" onClick={gotoClassStudents}>Team</Link>
                    <Link className="text-gray-600 mx-5 hover:text-indigo-500" onClick={gotoFeed}>Feed</Link>
                </div>
            </div>

            <div className="modal fade" id="editClubModal" tabIndex="-1" aria-labelledby="editClubLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 font-semibold" id="editClubModalLabel">Edit Club</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="club-name" className="col-form-label">Name</label>
                                    <input type="text" className="form-control" id="club-name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="club-description" className="col-form-label">Description</label>
                                    <textarea className="form-control" id="club-description"></textarea>
                                </div>
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="p-2 rounded-md bg-red-600 text-gray-100" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="p-2 rounded-md bg-indigo-600 text-gray-100">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ClassProfile;