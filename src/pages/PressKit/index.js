import * as React from "react";

import TopHeader from "src/commons/TopHeader";
import Header from "src/commons/MegaMenu";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section10";
import Footer from "src/commons/Footer";

import "src/styles/global.css";

const IndexPage = () => {
  return (
    <div>
     <TopHeader />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5/>
      <Section6 />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Palm HR</title>;