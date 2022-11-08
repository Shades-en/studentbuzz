import ProfileStudent from "../../components/profile/profile_student_page.component";
import StudentList from "../../components/student/connectStudent";

const StudentProfile = () => {
    return ( 
        <>
            <StudentList />
            <ProfileStudent />
        </>
     );
}
 
export default StudentProfile;