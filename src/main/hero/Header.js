import React, { useState } from "react";
import Tilt from "react-tilt";

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
    <div className="" style={{}}>
      <Nav />
      <div className="row">
        <div className="col-8 d-flex flex-column align-items-center container border-bottom pb-5">
          <div
            className="d-flex align-items-center"
            style={{ height: "100px" }}
          >
            {"Kyle Stinar".split("").map((letter, idx) => {
              return <TitleLetter letter={letter} key={idx} />;
            })}
          </div>
          <p className="h6 text-muted">Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
