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
          <Route path='/product'exact element={<ProductDetails/>}/>
        </Route>
        <Route element={<WithNav />}>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/profile' exact element={<ProfilePage/>}/>
        <Route path='/aboutus'exact element={<AboutUs/>}/>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
