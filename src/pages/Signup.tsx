import React from 'react';
import { useState } from 'react';
import { auth } from "../firebase/firebase";
import './../index.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




export default function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)
    };


    const handleSubmit = async (e : any) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate('/home')
            toast.success("Welcome", {
                position: "top-center",
              });
        } catch (error:any) {
            setErrorMessage(error.message)
        }
        if (errorMessage !== "") {
            toast.error(errorMessage, {
                position: "top-center",
              });
        }

    }



    return (
        <div className="container">
            <div className="sign-in-body">
                <h2>Gallery.io</h2>
                <form className="sign-in-container" onSubmit={handleSubmit}>
                    <div className="sign-in-heading">SIGN UP</div>

                    <div className="email">
                        <input 
                        required
                        type='email' 
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                         />
                    </div>

                     {/* PASSWORD */}
                    <div className="password  signup-input">
                        <input
                            required
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}/>
                        <div
                            className={`${showPassword ? 'show-password' : 'hide-password'}`}
                            onClick={handlePasswordVisibility}>
                        </div>
                        {password.length < 6 ? <label>Password must be more than 6 letters</label> : ""}
                    </div>

                    <button disabled={password.length < 6 ? true : false}>SIGN UP</button>
                    <div className="sign-in-help">
                    </div>
                    <div className="sign-up">
                        <p>Already registered? </p>
                        <a href="/login"> LOGIN NOW</a>
                    </div>
                </form>
            </div>
        </div>
    );
}