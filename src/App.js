import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from './pages/Welcome';
import { useState } from 'react';
import {useSelector} from 'react-redux';

function App() {
  const user = useSelector(state=>state.user.isUser);
  const [userData, setUserData] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register />}/>
          {user && <Route path="/welcome" element={<Welcome />}/>}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
