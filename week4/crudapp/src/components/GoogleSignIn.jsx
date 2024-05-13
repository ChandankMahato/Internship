// GoogleSignIn.jsx
import React from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const GoogleSignIn = () => {
  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Signed in user:', user);
    } catch (error) {
      console.error('Google sign-in error:', error.message);
    }
  };

  return (
    <div className="google-sign-in">
      <button className="google-sign-in-button" onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default GoogleSignIn;
