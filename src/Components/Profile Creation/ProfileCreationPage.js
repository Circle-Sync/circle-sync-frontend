import React, { useState } from 'react';
import './ProfileCreationPage.css';
import LoadingPage from '../Loading/LoadingPage';
import LikeDislikePage from '../Like Dislike/LikeDislikePage'; 

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [profileData, setProfileData] = useState(null); // Added state for profileData

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeTags = (e, index) => {
    const newTags = [...formData.tags];
    newTags[index] = e.target.value;
    setFormData({ ...formData, tags: newTags });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors

    // Perform input validation
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    } else if (!formData.email.trim().toLowerCase().endsWith('@illinois.edu')) {
      newErrors.email = 'Please enter a valid @illinois.edu email';
    }
    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
      newErrors.age = 'Age must be a valid positive number';
    }
    if (!formData.major.trim()) {
      newErrors.major = 'Major is required'; 
    }
    if (!formData.minor.trim()) {
      newErrors.minor = 'Minor is required';
    }
    if (!formData.interests.trim()) {
      newErrors.interests = 'Interests/Hobbies are required';
    }
    if (!formData.funFact.trim()) {
      newErrors.funFact = 'Fun Fact is required';
    }

    // Check if at least one checkbox is checked
    // if (!formData.tags.some(tag => tag !== '')) {
    //   newErrors.tags = 'Please select at least one group';
    // }

    // If there are errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed to create profile
    setIsSubmitting(true); // Set submitting state to true when form is submitted
    try {
      const profile = await onCreateProfile(formData);
      setProfileData(profile);
    } catch (error) {
      console.error('Profile creation failed:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="profile-creation-page-container">
      {isSubmitting ? (
        <LoadingPage />
      ) : profileData ? (
        <LikeDislikePage profileData={profileData} />
      ) : (
        <div className="profile-creation-page">
          <h1>Create Your Profile!</h1>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}

            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}

            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} />
            {errors.age && <span className="error">{errors.age}</span>}

            <label>Major:</label>
            <input type="text" name="major" value={formData.major} onChange={handleChange} />
            {errors.major && <span className="error">{errors.major}</span>}

            <label>Minor:</label>
            <input type="text" name="minor" value={formData.minor} onChange={handleChange} />
            {errors.minor && <span className="error">{errors.minor}</span>}

            <label>Interests/Hobbies:</label>
            <textarea name="interests" value={formData.interests} onChange={handleChange} />
            {errors.interests && <span className="error">{errors.interests}</span>}

            <label>Fun Fact:</label>
            <textarea name="funFact" value={formData.funFact} onChange={handleChange} />
            {errors.funFact && <span className="error">{errors.funFact}</span>}

            <label>Groups For:</label>
            <div className="tag-options">
              <input type="checkbox" id="academics" name="tag1" value="academics" onChange={handleChangeTags} />
              <label htmlFor="academics">Academics</label>

              <input type="checkbox" id="clubs" name="tag2" value="clubs" onChange={handleChangeTags} />
              <label htmlFor="clubs">Clubs</label>

              <input type="checkbox" id="entertainment" name="tag3" value="entertainment" onChange={handleChangeTags} />
              <label htmlFor="entertainment">Entertainment</label>
            </div>
            {errors.tags && <span className="error">{errors.tags}</span>}

            <button type="submit" className="profile-button">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileCreationPage;