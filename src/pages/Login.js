import { useState } from 'react'
import './../index.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./../firebase/firebase";
import { toast } from 'react-toastify';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };  
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setEmail("");
            setPassword("");
            toast.success("Login Successfully!!", {
                position: "top-center",
              });
              window.location.href="/home"
        } catch (error) {
            toast.error("Invalid email or password", {
                position: "top-center",
              });
        }

    }


    return (
        <div className="container">
            <div className="sign-in-body">
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