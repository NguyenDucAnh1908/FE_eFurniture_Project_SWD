import React, { useState, useEffect } from 'react';

function ProductPagination({ currentPage, totalPages, onPageChange }) {
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={currentPage === i ? 'is-active' : ''}>
          <button onClick={() => onPageChange(i)}>{i}</button>
        </li>
      );
    }
    return pages;
  };

  return (
    <div className="u-s-p-y-60">
      {/*====== Pagination ======*/}
      <ul className="shop-p__pagination">
        <li>
          <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
            <i className="fas fa-angle-left"></i>
          </button>
        </li>
        {renderPagination()}
        <li>
          <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
            <i className="fas fa-angle-right"></i>
          </button>
        </li>
      </ul>
      {/*====== End - Pagination ======*/}
    </div>
  );
}

export default ProductPagination;
