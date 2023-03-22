import React from "react";
import FifthComp from "./FifthComp";
import FourthComp from "./FourthComp";
import IntroComp from "./IntroComp";
import SecondComp from "./SecondComp";
import ThirdComp from "./ThirdComp";

const HomePage = () => {
  return (
    <div className="bg-[#05070f]">
      <IntroComp />
      <SecondComp />
      <ThirdComp />
      <FourthComp />
      <FifthComp />
    </div>
  );
};

export default HomePage;
