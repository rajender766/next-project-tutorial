import React from "react";
import { cookies } from "next/headers";

const AboutPage = async () => {
  const cookiesStore = await cookies();
  const theme = cookiesStore.get("theme");
  console.log(theme);
  console.log("About server components");
  return (
    <div>
      <h1>About Page {new Date().toLocaleTimeString()}</h1>
      <p>you know now about me </p>
    </div>
  );
};

export default AboutPage;
