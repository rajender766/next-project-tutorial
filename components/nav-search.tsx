"use client";

import React, { useState } from "react";

const NavSearch = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <h1>Nav Search Input</h1>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search Heres"
      />
    </div>
  );
};

export default NavSearch;
