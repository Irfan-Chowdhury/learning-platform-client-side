import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [toggle, setToggle] = useState(false);


    // Create By Email and Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Full Name & Photo URL
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    // Google
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('User Inside State Changed', currentUser);
            setUser(currentUser);
        })
        return () => unSubscribe();
    },[]);

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }


    // Toggle Change
    const handleChangeToggle = (event) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            console.log('Dark Mode',isChecked);
            setToggle(isChecked)
        }else{
            console.log('Light Mode',isChecked);
            setToggle(isChecked)
        }
    }


    const authInfo = {
        user, 
        createUser,
        updateUserProfile,
        providerLogin,
        signIn,
        logOut,
        toggle,
        handleChangeToggle
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;