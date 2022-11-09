import React from 'react';

function Button({ loadMore }) {
  return (
    <button onClick={loadMore} type="button" className="button">
      Load More
    </button>
  );
}

export default Button;
