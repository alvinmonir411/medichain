import React from "react";
import Hiro from "../Hiro";
import KeyInformation from "../KeyInformation";

const Home = () => {
  return (
    <div>
      <div>
        <Hiro />
      </div>
      <div className="md:-mt-30">
        <KeyInformation  />
      </div>
    </div>
  );
};

export default Home;
