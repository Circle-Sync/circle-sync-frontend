// In LikeDislikePage.js

import React, { useState } from 'react';
import './LikeDislikePage.css';
import profileImage from '../../Images/profile-image.jpg'; // Import the image file

const LikeDislikePage = ({ profileData }) => {
  // if (!profileData) {
  //   return null;
  // }

  // const { name, email, age, major, minor, interests, funFact, tags } = profileData;

  const [showLikeNotification, setShowLikeNotification] = useState(false);
  const [showDislikeNotification, setShowDislikeNotification] = useState(false);

  const handleLike = () => {
    setShowLikeNotification(true); // Show like notification
  };

  const handleDislike = () => {
    setShowDislikeNotification(true); // Show dislike notification
  };

  const handleCloseLikeNotification = () => {
    setShowLikeNotification(false); // Close like notification
  };

  const handleCloseDislikeNotification = () => {
    setShowDislikeNotification(false); // Close dislike notification
  };

  return (
    <div className="like-dislike-page">        
      <div className="main-content">
        <div className="profile">
          <img className="profile-image" src={profileImage} alt="Profile" />
          {/* <h2 className="profile-name">{name}</h2>
          <p>Email: {email}</p>
          <p>Age: {age}</p>
          <p>Major: {major}</p>
          <p>Minor: {minor}</p>
          <p>Interests/Hobbies: {interests}</p>
          <p>Fun Fact: {funFact}</p>
          <p>Tags: {tags.join(', ')}</p> */}
          <h2 className="profile-name">Milo</h2>
        </div>
        <div className="actions">
          <button className="action-button like" onClick={handleLike}>&#10003;</button>
          <button className="action-button dislike" onClick={handleDislike}>&#10007;</button>
        </div>
      </div>
      {showLikeNotification && (
        <div className="notification" onClick={handleCloseLikeNotification}>
          <p>New friend added! Click <a href="#">here</a> to start chatting :)</p>
          <button className="close-button" onClick={handleCloseLikeNotification}>❌</button>
        </div>
      )}
      {showDislikeNotification && (
        <div className="notification" onClick={handleCloseDislikeNotification}>
          <p>Profile disliked :/ Recommending new profile...</p>
          <button className="close-button" onClick={handleCloseDislikeNotification}>❌</button>
        </div>
      )}
    </div>
  );
};

export default LikeDislikePage;


