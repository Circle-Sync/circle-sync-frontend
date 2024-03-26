// In LikeDislikePage.js

import React from 'react';
import './LikeDislikePage.css';
import profileImage from '../../Images/profile-image.jpg'; // Import the image file

const LikeDislikePage = ({ profileData }) => {
  // if (!profileData) {
  //   return null;
  // }

  // const { name, email, age, major, minor, interests, funFact, tags } = profileData;

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
          <h2 className="profile-name">Profile Name</h2>
        </div>
        <div className="actions">
          <button className="action-button like">&#10003;</button>
          <button className="action-button dislike">&#10007;</button>
        </div>
      </div>
    </div>
  );
};

export default LikeDislikePage;
