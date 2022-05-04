import React from "react";
import { GiCloudRing, GiChakram, GiCircle } from "react-icons/gi";
import "./Style.css";

const SpinningImage = () => {
  return (
    <div className="d-flex">
      <GiChakram
        size={90}
        className="spinReverse"
        style={{ position: "relative", left: "70px", top: "10px" }}
      />
      <GiCloudRing
        className="spin"
        size={50}
        style={{ position: "relative", top: "30px" }}
      />
      <GiCircle size={110} style={{ position: "relative", right: "80px" }} />
    </div>
  );
};

export default SpinningImage;
