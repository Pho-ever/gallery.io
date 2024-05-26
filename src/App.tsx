import React from 'react';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/auth";
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  return (  
    <AuthProvider>
      <div>
            <Routes>
            <Route path="/" element={<Landing/>}/>

            <Route path="/login" element={
              <PublicRoute>
              <Login/>
            </PublicRoute>
            }/>

            <Route path="/signup" element={
              <PublicRoute>
                <Signup/>
              </PublicRoute>
            }/>
            
            <Route path="/home" element={
              <PrivateRoute>
                <Home/>
              </PrivateRoute>
            }/>
          </Routes>
      <ToastContainer/>
    </div>
    </AuthProvider> 
                 
  );
}

export default App;
