import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const signInWithFaceBook = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    auth,
    setUser,
    signInWithGoogle,
    logout,
    signInWithGithub,
    signInWithFaceBook,
  };
};

export default useFirebase;
