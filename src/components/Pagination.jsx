import React from 'react';
import '../styles/pagination.css';

const Pagination = ({ totalImages, imagesPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="page-number">{currentPage} / {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
