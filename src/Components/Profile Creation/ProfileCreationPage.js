import React, { useState } from 'react';
import './ProfileCreationPage.css';
import LoadingPage from '../Loading/LoadingPage';

const ProfileCreationPage = ({ onCreateProfile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    major: '',
    minor: '',
    interests: '',
    funFact: '',
    tags: ['', '', '']
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State variable to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeTags = (e, index) => {
    const newTags = [...formData.tags];
    newTags[index] = e.target.value;
    setFormData({ ...formData, tags: newTags });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true when form is submitted
    onCreateProfile(formData); // Pass the form data to the parent component
  };

  return (
    <div className="profile-creation-page-container">
        {isSubmitting ? (
            <LoadingPage />
        ) : (
            <div className="profile-creation-page">
                <h1>Create Your Profile!</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />

                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />

                    <label>Age:</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} />

                    <label>Major:</label>
                    <input type="text" name="major" value={formData.major} onChange={handleChange} />

                    <label>Minor:</label>
                    <input type="text" name="minor" value={formData.minor} onChange={handleChange} />

                    <label>Interests/Hobbies:</label>
                    <textarea name="interests" value={formData.interests} onChange={handleChange} />

                    <label>Fun Fact:</label>
                    <textarea name="funFact" value={formData.funFact} onChange={handleChange} />

                    <label>Groups For:</label>
                    <div class="tag-options">
                        <input type="checkbox" id="academics" name="tag1" value="academics" onChange={handleChangeTags} />
                        <label htmlFor="academics">Academics</label>

                        <input type="checkbox" id="clubs" name="tag2" value="clubs" onChange={handleChangeTags} />
                        <label htmlFor="clubs">Clubs</label>

                        <input type="checkbox" id="entertainment" name="tag3" value="entertainment" onChange={handleChangeTags} />
                        <label htmlFor="entertainment">Entertainment</label>
                    </div>
                    <button type="submit" className="profile-button">Submit</button>
                </form>
                </div>
        )}
    </div>
    
  );
};

export default ProfileCreationPage;
