import React from 'react';
import styles from "../styles/navbar.module.css";
import logo from "../icons/logo.svg";
import { auth } from '../firebase/firebase';
import { signOut } from 'firebase/auth';

export default function Navbar() {

  
    const handleLogout= async () => {
        try {
          await signOut(auth);
          window.location.href = "/login";
        } catch (error) {
          console.error("Error logging out:");
        }
      }

  return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
            <img src={logo} alt="icon" width="30px"/>
            <h2>Gallery.io</h2> 
            </div>
        <div>
            <button
                onClick={handleLogout}
            >
              Logout</button>
        </div>
    </nav>
  )
}
