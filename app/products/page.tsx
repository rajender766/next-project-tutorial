import Link from "next/link";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <h1>Featured Products</h1>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>
      <Link href="/products/4">Product 4</Link>
    </div>
  );
};

export default ProductsPage;
