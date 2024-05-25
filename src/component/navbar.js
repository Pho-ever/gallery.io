import React from 'react';
import styles from "../styles/navbar.module.css";
import logo from "../icons/logo.svg";
import { auth } from "./../firebase/firebase";

export default function Navbar() {

    async function handleLogout() {
        try {
          await auth.signOut();
          window.location.href = "/login";
          console.log("User logged out successfully!");
        } catch (error) {
          console.error("Error logging out:", error.message);
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
            >Logout</button>
        </div>
    </nav>
  )
}
