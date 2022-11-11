import { useState } from "react";
import ListItem from "../general/list_item.component";
import UploadButton from "../upload/uploadButton";

const StudentsComponent = () => {

    const [studentData, setstudentData] = useState(true)
    const [upload, setUpload] = useState(false)

    return ( 
        <>
        <div className="flex flex-col">
                <button type="button" style={{border: "solid 2px #6366f1"}} className=" mt-5 self-center flex items-center w-60 justify-center hover:text-blue-400 hover:bg-blue-400 h-10 p-2 rounded-md bg-white shadow-md">Download Student Template</button>
                {upload && <div className="mt-5 self-center flex items-center justify-center w-full">
                    <UploadButton label = {{"label": "Upload Excel"}}/>  
                </div>}
                              
               { studentData && <div className="flex flex-col items-center" id="student_content">
                    <div>
                        <h4 className="text-2xl uppercase text-center font-semibold my-5"> Information Science </h4>
                        <ListItem/>
                        <br/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                    </div>
                    <div>
                        <h4 className="text-2xl uppercase text-center font-semibold my-5"> Computer Science </h4>
                        <ListItem/>
                        <br/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                    </div>
                    <div>
                        <h4 className="text-2xl uppercase text-center font-semibold my-5"> Mechanical </h4>
                        <ListItem/>
                        <br/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                    </div>
                </div>
               } 
            </div>

        <div className="modal fade" id="addFacultyModal" tabIndex="-1" aria-labelledby="addFacultyModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 font-semibold" id="addAchieFacultyLabel">Add Faculty</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="faculty-name" className="col-form-label">Name</label>
                                    <input type="text" className="form-control" id="faculty-name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="faculty-email" className="col-form-label">Email</label>
                                    <input type="email" className="form-control" id="faculty-email"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="faculty-type" className="col-form-label">Type</label>
                                    <select className="form-select" aria-label="Default select example" id="faculty-type">
                                        <option selected value={"faculty"}>Faculty</option>
                                        <option defaultValue="hod">HOD</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="department" className="col-form-label">Department</label>
                                    <select className="ml-2 w-56 p-1" name="department" id="department">
                                        <option value="ISE">Computer Science</option>
                                        <option value="CSE">Information Science</option>
                                        <option value="MECH">Mechanical</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="p-2 rounded-md bg-red-600 text-gray-100" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="p-2 rounded-md bg-indigo-600 text-gray-100">Add</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
     );
}
 
export default StudentsComponent;