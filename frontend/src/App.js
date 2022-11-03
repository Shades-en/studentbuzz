import './App.css';
import {Routes, Route} from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom'
import Home from './routes/home/home';
import NavbarAnon from './components/navbar/navAnon.component';
import NavbarStudent from './components/navbar/navStudent.component';
import LoginFaculty from './routes/login/loginFaculty';
import LoginUni from './routes/login/loginUni';
import SignupUni from './routes/signup/signupUni';
import StudentHome from './routes/studentHome/studHome.component';

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
          <Route index element={<StudentHome/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
