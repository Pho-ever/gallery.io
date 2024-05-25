import React from 'react';
import { useState, useEffect } from 'react'
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { Navigate, BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase/firebase";

function App() {

  const [user, setUser] = useState();

  useEffect(()=> {
    auth.onAuthStateChanged((user)=> {
      setUser(user)
      // console.log(user)
    })
  })
  return (
    <Router>
          <div>
            <section>                              
                <Routes>
                  <Route path="/" element={user ? <Navigate to="/home"/> : <Landing/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/home" element={ user === null ? <Navigate to="/"/> : <Home/> }/>
                </Routes>  
                <ToastContainer/>                  
            </section>
          </div>
        </Router>
  );
}

export default App;
