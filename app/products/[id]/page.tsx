import React from "react";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      ProductPage
      <h1>
        Product {id} details rendered at {new Date().toLocaleTimeString()}
      </h1>
    </div>
  );
};

export default ProductPage;
