import Login from '../../components/login/loginFaculty.component'; 
import { Navigate } from "react-router-dom";

const LoginUni = () => {
    
    const user = localStorage.getItem('user');

    return (  
        <> 
            {user? <Navigate to="/uni/feed" /> : <Login type={{uni: true}} />}
        </>
    );
}

export default LoginUni;