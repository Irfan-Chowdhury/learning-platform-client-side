import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    // Create By Email and Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

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

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user, 
        createUser,
        providerLogin,
        logOut
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;