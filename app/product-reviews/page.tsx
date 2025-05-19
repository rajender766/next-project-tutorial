import Product from "@/components/Product";
import Reviews from "@/components/reviews";
import React, { Suspense } from "react";

const ProductReviews = () => {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p> Loading Product Detials..</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p> Loading Reviews..</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
};

export default ProductReviews;
