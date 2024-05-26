import React from 'react'
import './../index.css';
import Typewriter from 'typewriter-effect';

export default function Landing() {
  return (
        <div className="container">
            <div className="navbar">
                <p>Gallary.io</p>
            <div>
                <a href="/login" className="sign-in">
                    Login
                </a>
            </div>
        </div>

            <div className="landing-info">
                    <div> 
                    <h2> Upload, Save And Edit Your</h2>
                    <h2> Favourite 
                    <Typewriter
                        // wrapperClassName="Typewriter__wrapper"
                        options={{
                            strings: ['PNG', 'JPEG', 'JPG'],
                            autoStart: true,
                            loop: true,
                            delay: 40,
                        }}/> Images</h2> 
                    </div>
                    <a href="/signup">
                        <button type="button" className="getStarted">
                            Get started 
                        </button>
                    </a>
                </div>
            </div>
  )
}
