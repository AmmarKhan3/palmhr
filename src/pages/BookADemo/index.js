import * as React from "react";

import TopHeader from "src/commons/TopHeader";
import Header from "src/commons/MegaMenu";
import Section1 from "./Section1";
import Footer from "src/commons/Footer";

import "src/styles/global.css";

const IndexPage = () => {
  return (
    <div>
     <TopHeader />
      <Header />
      <Section1 />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Palm HR</title>;