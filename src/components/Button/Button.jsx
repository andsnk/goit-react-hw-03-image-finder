import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button">
      Load More
    </button>
  );
};

export default Button;
