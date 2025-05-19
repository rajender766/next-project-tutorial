import fs from "fs";
import ServerCompTwo from "./server-component-two";
//import ClientComponentOne from "./client-component-one";

const ServerCompOne = () => {
  fs.readFileSync("components/server-component-one.tsx", "utf-8");
  return (
    <>
      <h1>Server Component One</h1>
      <ServerCompTwo />
    </>
  );
};

export default ServerCompOne;
