// App.js
import React, { useState } from 'react';
import './App.css';
import LoginPage from './Components/Login/LoginPage';
import LikeDislikePage from './Components/Like Dislike/LikeDislikePage'; 
import ProfileCreationPage from './Components/Profile Creation/ProfileCreationPage';
import LoadingPage from './Components/Loading/LoadingPage'; // Import LoadingPage component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileCreated, setIsProfileCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for loading page

  const handleLoginPage = () => setIsLoggedIn(true);

  const handleProfileCreation = (userData) => {
    setIsLoading(true); // Set loading state to true when form is submitted
    setTimeout(() => {
      setIsProfileCreated(true);
      setIsLoading(false); // Set loading state to false after timeout (replace with actual API call)
    }, 5000); // Simulating a delay of 2 seconds for demonstration purpose
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLoginPage}/>
      ) : !isProfileCreated ? (
        <>
          <ProfileCreationPage onCreateProfile={handleProfileCreation} />
          {isLoading && <LoadingPage />} {/* Show loading page if loading state is true */}
        </>
      ) : (
        <LikeDislikePage />
      )}
    </>
  );
}

export default App;
