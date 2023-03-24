import * as React from "react";

import TopHeader from "../../commons/TopHeader";
import Header from "../../commons/MegaMenu";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Footer from "../../commons/Footer";

import "../../styles/global.css";

const IndexPage = () => {
  return (
    <div>
     <TopHeader />
      <Header />
      <Section1 />
      <Section3 />
      <Section9/>
      <Section10 />
      <Section11 />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Palm HR</title>;