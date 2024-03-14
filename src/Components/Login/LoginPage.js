// LoginPage.js
import React, {useState, useEffect} from 'react';
import './LoginPage.css';
import app from '../../firebaseConfig'; // Adjust the import path as necessary
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const auth = getAuth(app);

function LoginPage({onLogin}) {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleLoginPage = () => {
    const provider = new GoogleAuthProvider();

    // Brings up Popup window to log in with
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('User object after login:', result.user);
        setValue(result.user.uid);
        localStorage.setItem("user_id", result.user.uid);
        console.log('User object after login_ID:', result.user.uid);
        setLoading(false); // Set loading to false after successful login
        onLogin(result.user); // Trigger the onSignIn callback after successful sign in with user object
      })
      .catch((error) => {
        // Handle Errors here.
        console.error(error);
        setLoading(false); // Set loading to false in case of an error
      });

    setLoading(true); // Set loading to true when the login process starts
  };

  useEffect(() => {
    setValue(localStorage.getItem("user_id"));
  }, []);

  const signInOps = () => {
    handleLoginPage();
  };


  return (
    <div className="signin-page">

      <div className="dynamic-circle circle-one"></div>
      <div className="dynamic-circle circle-two"></div>
      <div className="dynamic-circle circle-three"></div>
      <div className="dynamic-circle circle-four"></div>
      <div className="dynamic-circle circle-five"></div>
      <div className="dynamic-circle circle-six"></div>
      <div className="dynamic-circle circle-seven"></div>
      <div className="dynamic-circle circle-eight"></div>

      <div className="login-container">
            <div className="signin-header">
              <h1>Welcome to CircleSync!</h1>
              <p>Swipe to Connect :)</p>
            </div>

            <div className="button-container">
              <button onClick={signInOps} disabled={loading} className="signin-button">
                {loading ? 'Logging in...' : 'Login with Google'}
              </button>
            </div>

            <div className="signin-footer">
                <p>By signing in, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
      </div>
    </div>
  );

}

export default LoginPage;

