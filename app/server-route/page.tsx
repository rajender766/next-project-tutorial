import React from "react";
import ImageSlider from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

const ServerRoute = () => {
  const result = serverSideFunction();
  return (
    <div>
      <p>server routing {result}</p>
      <ImageSlider />
    </div>
  );
};

export default ServerRoute;
