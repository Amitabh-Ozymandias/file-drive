import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageCard from '../components/ImageCard';
import Pagination from '../components/Pagination';
import '../styles/home.css'; // Assuming you have or want to create a CSS file for Home

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const imagesPerPage = 50;
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      navigate('/');
      return;
    }

    const savedImages = JSON.parse(localStorage.getItem(`images:${currentUser}`)) || [];
    setImages(savedImages);
  }, []);

  const indexOfLast = currentPage * imagesPerPage;
  const indexOfFirst = indexOfLast - imagesPerPage;
  const currentImages = images.slice(indexOfFirst, indexOfLast);

  return (
    <div className="home-container">
      {images.length === 0 ? (
        <div className="no-images-message">
          <h2>No images uploaded yet.</h2>
          <p>Click "Upload" in the navbar to add your first image.</p>
        </div>
      ) : (
        <>
          <div className="image-grid">
            {currentImages.map((url, index) => (
              <ImageCard key={index} img={{ id: index, url }} />
            ))}
          </div>
          <Pagination
            totalImages={images.length}
            imagesPerPage={imagesPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Home;
