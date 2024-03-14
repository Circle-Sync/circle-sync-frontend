// LikeDislikePage.js
import React from 'react';
import './LikeDislikePage.css';
import profileImage from '../../Images/profile-image.jpg'; // Import the image file

const LikeDislikePage = () => {
  return (
    <div className="like-dislike-page">
      <div className="profile">
        <img className="profile-image" src={profileImage} alt="Profile" />
        <h2 className="profile-name">Profile Name</h2>
      </div>
      <div className="actions">
        <button className="action-button like">&#10003;</button>
        <button className="action-button dislike">&#10007;</button>
      </div>
    </div>
  );
};

export default LikeDislikePage;
