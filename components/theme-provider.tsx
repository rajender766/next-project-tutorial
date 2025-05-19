"use client";

import React from "react";
import { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const detaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

const ThemeContext = createContext<Theme>(detaultTheme);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext value={detaultTheme}>{children}</ThemeContext>;
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
