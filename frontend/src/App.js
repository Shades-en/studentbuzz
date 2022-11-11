import './App.css';
import {Routes, Route} from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom'

import LoginFaculty from './routes/login/loginFaculty';
import LoginUni from './routes/login/loginUni';
import SignupUni from './routes/signup/signupUni';

import Home from './routes/home/home';
import NavbarAnon from './components/navbar/navAnon.component';
import Navbar from './components/navbar/nav.component';

import SidebarStud from './components/navbar/sidebarStud';
import StudentFeed from './routes/student/feed';
import StudentNotification from './routes/student/notifications';
import StudentSearch from './routes/student/search';
import StudentClubs from './routes/student/clubs/clubs';
import StudentClubDetails from './routes/student/clubs/clubDetails';
import StudentProfile from './routes/student/profile';

import SidebarFac from './components/navbar/sidebarFac';
import FacultyFeed from './routes/faculty/feed';
import FacultyNotification from './routes/faculty/notifications';
import FacultySearch from './routes/faculty/search';
import FacultyClass from './routes/faculty/class';
import FacultyProfile from './routes/faculty/profile';

import SidebarUni from './components/navbar/sidebarUni';
import UniFeed from './routes/uni/feed';
import UniSearch from './routes/uni/search';
import UniProfile from './routes/uni/profile';
import SignUpStudent from './components/signup/signUpStudent';

import {useAuthContext} from './hooks/useAuthContext';
import {useEffect} from 'react';
 
function App() {
  const {dispatch, user} = useAuthContext();
  useEffect(() => {
    dispatch({type: 'LOGIN', payload: localStorage.getItem('user')})
    console.log(user)
    // if(user){
    //   fetch('/api/uni/posts', {
    //     headers: {'Authorization': user},
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data)
    //     })
    //     .catch(err => console.log(err))
    // }
    
  }, [user])  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarAnon />}>
          <Route index element={<Home />}/>
          <Route path="login-faculty" element={<LoginFaculty/>}></Route>
          <Route path="login-uni" element={<LoginUni/>}></Route>
          <Route path="sign-up-uni" element={<SignupUni/>}></Route>
          <Route path="sign-up-student" element={<SignUpStudent />}></Route>
        </Route>
        <Route path="/" element={<Navbar />}>
          <Route path="student" element={<SidebarStud />}>
            <Route path="feed" element={<StudentFeed/>}></Route>
            <Route path="notif" element={<StudentNotification/>}></Route>
            <Route path="search" element={<StudentSearch/>}></Route>
            <Route path="profile" element={<StudentProfile />}></Route>
            <Route path="clubs" element={<StudentClubs/>}></Route>
            <Route path="clubs/club-detail" element={<StudentClubDetails/>}></Route>
          </Route>
          <Route path="faculty" element={<SidebarFac/>}>
            <Route path="feed" element={<FacultyFeed/>}></Route>
            <Route path="notif" element={<FacultyNotification/>}></Route>
            <Route path="search" element={<FacultySearch/>}></Route>
            <Route path="class" element={<FacultyClass/>}></Route>
            <Route path="profile" element = {<FacultyProfile/>}></Route>
          </Route>
          <Route path="uni" element={<SidebarUni/>}>
            <Route path="feed" element={<UniFeed/>}></Route>
            <Route path="search" element={<UniSearch/>}></Route>
            <Route path="profile" element={<UniProfile/>}></Route>
          </Route>
        </Route>       
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
