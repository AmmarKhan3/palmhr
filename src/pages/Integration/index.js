import * as React from "react";

import TopHeader from "../../commons/TopHeader";
import Header from "../../commons/MegaMenu";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "src/commons/RegisterationForm";
import Section11 from "./Section11";
import Section12 from "./Section12";
import Footer from "../../commons/Footer";

import "../../styles/global.css";

const IndexPage = () => {
  return (
   <div >
     <TopHeader />
      <Header />
      <Section1 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section8 />
      <Section6 />
      <Section9/>
      <Section7 />
      <Section12 />
      <Section10 />
      <Section11 />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Palm HR</title>;