/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";

const ClientComponentTow = () => {
  const [name, setName] = useState("mahesh");
  return (
    <div>
      <h1>client component Two</h1>
    </div>
  );
};

export default ClientComponentTow;
