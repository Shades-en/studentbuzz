import Login from '../../components/login/loginFaculty.component'; 
import { Navigate } from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext';
import { useEffect } from 'react';

const LoginUni = () => {
    
    const {user, dispatch} = useAuthContext();
    useEffect(() => {
        user = localStorage.getItem('user');
        dispatch({type: 'LOGIN', payload: user})
        console.log(user, "user");
    }, [user, dispatch])
    
    // console.log(user);
    return (  
        <> 
            {user? <Navigate to="/uni/feed" /> : <Login type={{uni: true}} />}
        </>
    );
}

export default LoginUni;