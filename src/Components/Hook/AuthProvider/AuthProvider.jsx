import { createContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const googleSignIn = () => {
return signInWithPopup()
  };

  const AuthInfo = {
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
