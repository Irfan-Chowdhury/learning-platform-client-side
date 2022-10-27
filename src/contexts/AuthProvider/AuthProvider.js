import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [loading, setLoading] = useState(true); //লগিন থাকা অবস্থাই রিলোড দিলে, লগিন পেজে নিয়ে আসে । এটা ইমপ্লেন্ট করলে হবেনা ।


    // Create By Email and Password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Full Name & Photo URL
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    // Google
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('User Inside State Changed', currentUser);
            if(currentUser===null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => unSubscribe();
    },[]);

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
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
        handleChangeToggle,
        loading,
        setLoading
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;