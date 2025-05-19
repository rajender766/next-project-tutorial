import fs from "fs";

const ServerCompTwo = () => {
  fs.readFileSync("components/server-component-two.tsx", "utf-8");
  return <h1>Server Component Two</h1>;
};

export default ServerCompTwo;
