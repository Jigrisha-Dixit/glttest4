import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignUp from './comp/signup';
import Login from './comp/Login';
import DashbOard from './comp/dashboard';
import AdminLogin from './comp/AdminLogin';
import AdminDash from './comp/AdminDash';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login></Login>}></Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={<DashbOard></DashbOard>}></Route>
       <Route path='/AdminDash' element={<AdminDash></AdminDash>}></Route>
<Route path='/Admin' element={<AdminLogin></AdminLogin>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
