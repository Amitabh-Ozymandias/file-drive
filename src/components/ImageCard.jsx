import React from 'react';
import '../styles/imageCard.css';

const ImageCard = ({ img }) => (
  <div className="image-card">
    <img src={img.url} alt={`img-${img.id}`} />
  </div>
);

export default ImageCard;
