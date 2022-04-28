import React from "react";
import SpinningImage from "./SpinningImage";
import TitleLetter from "./TitleLetter";

const Header = () => {
  return (
    <div className="border-bottom container" style={{}}>
      <div className="row mt-5" style={{ height: "80vh" }}>
        <div className="d-flex flex-column align-items-center   pb-5">
          <SpinningImage />
          <div
            className="d-flex align-items-center"
            style={{ height: "100px" }}
          >
            {"Kyle Stinar".split("").map((letter, idx) => {
              return <TitleLetter letter={letter} key={idx} />;
            })}
          </div>
          <p className="h6 text-muted">Software Developer</p>
          <div className="row mt-5 w-50 d-flex">
            <p className="text-center">
              Full-Stack software engineer proficient in using Javascript for
              front-end and back-end programming. Strong background using React,
              HTML, CSS, API implementing, Node.JS, Express, PostgreSQL, and
              frameworks like Bootstrap.
              <br />
              <br />
              Background as Sergeant in the army trained to solve problems on
              the fly, adaptable to changing environments and comfortable
              tackling new situations as they arise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
