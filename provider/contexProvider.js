"use client"
const { createContext, useEffect, useState } = require("react");
import app from "@/Firebase/firebase.config";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const Contex = createContext();

const ContexProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
    
      const signIn = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
      const googleSignIn = () => {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider);
      };
      
    
      const logOut = () => {
        return signOut(auth);
      };


      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          if (currentUser) {
            const userData = {
              name: currentUser?.displayName,
              email: currentUser?.email,
              photo: currentUser?.photoURL,
              role: "user",
              points: 0,
              warning: 0,
              blocked: false,
            };
           
            
          } 
        });
    
        return () => {
          return unsubscribe();
        };
      }, []);


    const info = {
        createUser,
        signIn,
        googleSignIn
    }
    return(
        <Contex.Provider value={info}>
            {children}
        </Contex.Provider>
    );
};

export default ContexProvider; 