"use client";

//import ImageSlider from "@/components/ImageSlider";
import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";
import React from "react";

const ClientRoute = () => {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <div>
      <h1 style={{ color: theme.colors.primary }}>Client Router Page</h1>
      <p>this is : {result}</p>
    </div>
  );
};

export default ClientRoute;
