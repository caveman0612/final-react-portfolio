import React, { useState } from "react";
import Tilt from "react-tilt";
import image from "../../assets/avatar.png";
import Nav from "./Nav";
import TitleLetter from "./TitleLetter";

const Header = () => {
  const [hover, setHover] = useState(false);
  //   function activateHover() {
  //     setHover(true);
  //   }
  //   function deactivateHover() {
  //     setHover(false);
  //   }

  const hoverEffect = hover ? "border border-4 border-info" : "";
  return (
    <div className="" style={{ height: "100vh" }}>
      <Nav />
      <div className="d-flex flex-column align-items-center">
        <img
          src={image}
          alt="avatar"
          className={`mt-5 rounded-pill ${hoverEffect}`}
          width="80px"
        />
        <div className="d-flex align-items-center" style={{ height: "100px" }}>
          {"Kyle Stinar".split("").map((letter, idx) => {
            return <TitleLetter letter={letter} key={idx} />;
          })}
        </div>
        <p className="h6 text-muted">Software Developer</p>
      </div>
    </div>
  );
};

export default Header;
