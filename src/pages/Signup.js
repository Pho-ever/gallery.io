import { useState } from 'react'
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
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email:user.email,
                    displayName: userName
                })
            }
            toast.success("Registeration Successfully!!", {
                position: "top-center",
              });
        } catch (error) {
            toast.error(error.message, {
                position: "top-center",
              });

        }
    }

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
                        onChange={e => setUserName(e.target.value)}
                        />
                    </div>

                    <div className="email">
                        <input 
                        required
                        type='email' 
                        placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                         />
                    </div>

                     {/* PASSWORD */}
                    <div className="password  signup-input">
                        <input
                            required
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}/>
                        <div
                            className={`${showPassword ? 'show-password' : 'hide-password'}`}
                            onClick={handlePasswordVisibility}>
                        </div>
                        {password < 6 ? <label>Password must be more than 6 letters</label> : ""}
                    </div>

                    <button>SIGN UP</button>
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