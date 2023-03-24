import * as React from "react";
import Home from "./Home";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Palm HR</title>;
