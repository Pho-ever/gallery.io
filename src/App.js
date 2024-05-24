import React from 'react';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
          <div>
            <section>                              
                <Routes>
                  <Route path="/" element={<Landing/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/home" element={<Home/>}/>
                </Routes>  
                <ToastContainer/>                  
            </section>
          </div>
        </Router>
  );
}

export default App;
