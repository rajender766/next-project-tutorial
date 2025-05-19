import React from "react";

const Reviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 8000));

  return (
    <div>
      <h1>Product Reviews</h1>
    </div>
  );
};

export default Reviews;
