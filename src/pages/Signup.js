import { useState } from 'react';
import './../index.css';
import { auth, db } from "./../firebase/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { setDoc, doc } from "firebase/firestore";


export default function Signup() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)};


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            createUserWithEmailAndPassword(auth, email, password)
            setUserName("");
            setEmail("");
            setPassword("");

            toast.success("Registeration Successfully!!", {
                position: "top-center",
              });
              

            const user = auth.currentUser;
            // console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: email,
                    displayName: userName
                })
            }
        } catch (error) {
            toast.error(error.message, {
                position: "top-center",
            }); 
        }

    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log("Username:", userName)
    //     console.log("Email:", email)
    //     console.log("Password:", password)
    // }


    return (
        <div className="container">
            <div className="sign-in-body">
                <form className="sign-in-container" onSubmit={handleSubmit}>
                    <div className="sign-in-heading">SIGN UP</div>

                    <div className="email">
                        <input 
                        required
                        type='name' 
                        placeholder='Username'
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        />
                    </div>

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