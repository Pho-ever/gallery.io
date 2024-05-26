import React from 'react';
import { useState } from 'react'
import './../index.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase/firebase";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };  
  
    const handleSubmit = async(e : any) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/home')
            setEmail("");
            setPassword("");
            toast.success("Welcome back", {
                position: "top-center",
              });
        } catch (error) {
            toast.error("Invalid email or password", {
                position: "top-center",
              });
        }

    }


    return (
        <div className="container">
            <div className="sign-in-body">
            <h2>Gallery.io</h2>
                <form className="sign-in-container" onSubmit={handleSubmit}>
                    <div className="sign-in-heading">LOGIN</div>

                    <div className="email">
                        <input 
                        type='email' 
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="password">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div
                            className={`${showPassword ? 'show-password' : 'hide-password'}`}
                            onClick={handlePasswordVisibility}
                        ></div>
                        {password.length < 6 ? <label>Password must be more than 6 letters</label>:  ""}
                    </div>

                    <button>LOGIN</button>
                    <div className="sign-in-help">
                        
                    </div>
                    <div className="sign-up">
                        <p>New to Gallery.io? </p>
                            <a href="/signup"> SIGN UP NOW</a>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login;