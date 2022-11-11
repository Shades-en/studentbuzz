
import ListItem from "../general/list_item.component";
import UploadButton from "../upload/uploadButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FormatIndentDecreaseSharp } from "@mui/icons-material";
import { useEffect } from "react";

const StudentsComponent = () => {
    const {user, dispatch} = useAuthContext();
    const currentUni = localStorage.getItem('user');
    const [students, setStudents] = useState([]);

    const [studentData, setstudentData] = useState(false)
    const [upload, setUpload] = useState(true)
    const [selectedFile, setSelectedFile] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('studentscsv', selectedFile)
        formData.append('uid', currentUni)
        
        const response = await fetch('/api/uni/add-student-file',{
            method: "POST",
            headers: {'Authorization': user},
            body: formData,
        })

        const json = await response.json()

        if(response.ok){
            console.log(json)
            setUpload(false)
        }
    }

    return ( 
        <>
        <div className="flex flex-col">
            <a type="button" href="https://firebasestorage.googleapis.com/v0/b/reva-hack-e99dd.appspot.com/o/Uni.csv?alt=media&token=5a7908c6-8385-4cc2-aa55-3d8d48ce7db4" style={{border: "solid 2px #6366f1"}} className=" mt-5 self-center flex items-center w-60 justify-center hover:text-blue-400 hover:bg-blue-400 h-10 p-2 rounded-md bg-white shadow-md">Download Student Template</a>
            <form onSubmit={handleSubmit}>
                {upload && <div className="mt-5 self-center flex flex-col items-center justify-center w-full">
                    <UploadButton context = {{"label": "Upload Excel", selectedFile, setSelectedFile}}/>  
                    
                    <div className=" items-end">
                        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                    
                </div>
                
                }
            </form>
                    
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
        </>
     );
}
 
export default StudentsComponent;