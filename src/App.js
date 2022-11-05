import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import ProfilePage from './pages/ProfilePage';
import WithNav from './component/WithNav';
import WithoutNav from './component/WithoutNav';



function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/signup-login" element={<Signup />} />
        </Route>
        <Route element={<WithNav />}>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/profile' exact element={<ProfilePage/>}/>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
