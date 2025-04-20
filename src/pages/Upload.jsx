import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/upload.css';

const Upload = () => {
  const [image, setImage] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      navigate('/');
      return;
    }
    setUserEmail(currentUser);
  }, [navigate]);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!image || !userEmail) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      const existing = JSON.parse(localStorage.getItem(`images:${userEmail}`)) || [];
      const updated = [...existing, base64];
      localStorage.setItem(`images:${userEmail}`, JSON.stringify(updated));
      alert("Image uploaded!");
      setImage(null);
    };
    reader.readAsDataURL(image);
  };

  return (
    <div className="upload-container">
      <h2>Upload Image</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
      {image && (
        <div className="preview">
          <p>Preview:</p>
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
          />
        </div>
      )}
    </div>
  );
};

export default Upload;
