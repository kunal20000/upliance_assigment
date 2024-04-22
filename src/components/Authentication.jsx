import React from 'react';
import { signInWithGoogle, signOut } from '../authService';

const Authentication = () => {

  const handleSignIn= ()=>{
    signInWithGoogle();

  }
  const handleSignOut = ()=>{
    signOut();
  }
  return (
    <div className='authentication-container'>
       <button onClick={handleSignIn}>Sign In with Google</button>
       <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Authentication;
