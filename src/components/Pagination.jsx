import React from "react";
import "../App.css";

const Pagination = ({ current, onChange, total }) => {
  const pageNumbers = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={`pagination__button ${
            page === current ? "pagination__button--active" : ""
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
