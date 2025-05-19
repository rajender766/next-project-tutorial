/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
///import ClientComponentTow from "./client-component-two";
import ServerCompOne from "./server-component-one";

const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("Rajender");
  return (
    <div>
      <h1>client component one</h1>
      {children}
    </div>
  );
};

export default ClientComponentOne;
