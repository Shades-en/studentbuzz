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
            <Route index element={<StudentHome/>}></Route>
            <Route path="notification" element={<Notification/>}></Route>
            <Route path="search" element={<Search/>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
