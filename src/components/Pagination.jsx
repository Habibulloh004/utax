import React, { useState } from 'react';

const Pagination = ({ tests }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(tests.length / itemsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 0; i < pageCount; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? 'active' : ''}>
          {i + 1}
        </button>,
      );
    }
    return pageNumbers;
  };

  // const startIndex = currentPage * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentData = tests.slice(startIndex, endIndex);

  return (
    <div>
      {/* <h1>Pagination Example</h1>
      {currentData.map((item, index) => (
        <div key={index} className="card">
          <h2>{item.title}</h2>
          <p>{item.question}</p>
          <p>{item.id}</p>
        </div>
      ))} */}

      <div className="pagination flex gap-5">
        <button onClick={handlePrevClick} disabled={currentPage === 0}>
          Previous
        </button>
        {renderPageNumbers()}
        <button onClick={handleNextClick} disabled={currentPage === pageCount - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
