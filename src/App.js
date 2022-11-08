import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import ProfilePage from './pages/ProfilePage';
import WithNav from './component/WithNav';
import WithoutNav from './component/WithoutNav';
import ForAuthorized from './pages/ForAuthorized';
import ForAdminRegister from './pages/ForAdminRegister';
import { useState } from 'react';
import AboutUs from './pages/AboutUs';
import ProductDetails from './pages/ProductDetails';
import OptionChoose from './pages/OptionChoose';
import Policy from './component/Policy';
import ForgetPassword from './pages/ForgetPassword';
import FromAdmin from './pages/FromAdmin';



function App() {
  const [loggedin,setLoggedin]=useState(false);
  return (
    <div className="App">
      <Router>
      
        <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/signup-login" element={<Signup />} />
          <Route path='/admin' exact element={<ForAuthorized setLoggedin={setLoggedin}/>}/>
          <Route path='/admin-register' exact element={<ForAdminRegister/>}/>
          <Route path='/forget-password' exact element={<ForgetPassword/>}/>
          <Route path='/product'exact element={<ProductDetails/>}/>
        </Route>
        <Route element={<WithNav />}>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/profile' exact element={<ProfilePage/>}/>
        <Route path='/aboutus'exact element={<AboutUs/>}/>
        <Route path='/choose-option/:eMailTo/:ebookName'exact element={<OptionChoose/>}/>
        <Route path='/policy'exact element={<Policy/>}/>
        <Route path='/home-admin'exact element={<FromAdmin/>}/>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
