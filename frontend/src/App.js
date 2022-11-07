import './App.css';
import {Routes, Route} from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom'
import Home from './routes/home/home';
import NavbarAnon from './components/navbar/navAnon.component';
import NavbarStudent from './components/navbar/navStudent.component';
import SidebarStud from './components/navbar/sidebarStud';
import LoginFaculty from './routes/login/loginFaculty';
import LoginUni from './routes/login/loginUni';
import SignupUni from './routes/signup/signupUni';
import StudentHome from './routes/student/Feed';
import Notification from './routes/student/notifications';
import Search from './routes/student/search';
import Clubs from './routes/student/clubs/clubs';
import ClubDetails from './routes/student/clubs/clubDetails';
import StudentProfile from './routes/student/profile';
 
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
        <Route path="/student" element={<NavbarStudent/>}>
          <Route path="" element={<SidebarStud />}>
            <Route path="feed" element={<StudentHome/>}></Route>
            <Route path="notif" element={<Notification/>}></Route>
            <Route path="search" element={<Search/>}></Route>
            <Route path="profile" element={<StudentProfile />}></Route>
            <Route path="clubs" element={<Clubs/>}></Route>
            <Route path="clubs/club-detail" element={<ClubDetails/>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
