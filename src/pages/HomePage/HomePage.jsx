import React from "react";
import Footer from "../../components/Footer";
import FifthComp from "./FifthComp";
import FourthComp from "./FourthComp";
import IntroComp from "./IntroComp";
import SecondComp from "./SecondComp";
import SixthComp from "./SixthComp";
import ThirdComp from "./ThirdComp";

const HomePage = () => {
  return (
    <div className="bg-[#05070f]">
      <IntroComp />
      <SecondComp />
      <ThirdComp />
      <FourthComp />
      <FifthComp />
      <SixthComp />
      <Footer />
    </div>
  );
};

export default HomePage;
