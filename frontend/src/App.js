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
import Notification from './routes/student/notifications';
import Search from './routes/student/search';
import Clubs from './routes/student/clubs/clubs';
import ClubDetails from './routes/student/clubs/clubDetails';
import StudentProfile from './routes/student/profile';

import SidebarFac from './components/navbar/sidebarFac';
import FacultyFeed from './routes/faculty/feed';
import FacultyNotification from './routes/faculty/notifications';
import FacultySearch from './routes/faculty/search';
import FacultyClass from './routes/faculty/class';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarAnon />}>
          <Route index element={<Home />}/>
          <Route path="login-faculty" element={<LoginFaculty/>}></Route>
          <Route path="login-uni" element={<LoginUni/>}></Route>
          <Route path="sign-up-uni" element={<SignupUni/>}></Route>
        </Route>
        <Route path="/" element={<Navbar/>}>
          <Route path="student" element={<SidebarStud />}>
            <Route path="feed" element={<StudentFeed/>}></Route>
            <Route path="notif" element={<Notification/>}></Route>
            <Route path="search" element={<Search/>}></Route>
            <Route path="profile" element={<StudentProfile />}></Route>
            <Route path="clubs" element={<Clubs/>}></Route>
            <Route path="clubs/club-detail" element={<ClubDetails/>}></Route>
          </Route>
          <Route path="faculty" element={<SidebarFac/>}>
            <Route path="feed" element={<FacultyFeed/>}></Route>
            <Route path="notif" element={<FacultyNotification/>}></Route>
            <Route path="search" element={<FacultySearch/>}></Route>
            <Route path="class" element={<FacultyClass/>}></Route>
          </Route>

        </Route>       
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
