import React, { useState } from "react";
import Nav from "./Nav";
import TitleLetter from "./TitleLetter";
import Pong from "../pong.js/Pong";

const Header = () => {
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
        {/* <Pong /> */}
      </div>
    </div>
  );
};

export default Header;
