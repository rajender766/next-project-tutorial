import React from "react";

const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>
      <h1>Product</h1>
    </div>
  );
};

export default Product;
