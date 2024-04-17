import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Auth.js';
import React, { useState } from 'react'


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                console.log(userCredential);
            }
        ).catch((error) => {
            //console.log(error);
            alert(error);
        }

        )
    }

    return (
        <div className="sign-in">
            <form onSubmit={signIn}>
                <h1>Log In</h1>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}>

                </input>
                <input type="password" placeholder="Enter your passwword" value={password} onChange={(e) => setPassword(e.target.value)}>

                </input>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
};

export default SignIn;