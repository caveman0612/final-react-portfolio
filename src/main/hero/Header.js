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
              I am a software developer. I currently live in Tacoma WA. I love
              everything about programming, and look forward to doing it for the
              rest of my life.
            </p>

            <div className="">
              <p className="text-center text-decoration-underline">
                <b>Why I love Programming</b>
              </p>
              <ol className="ms-5" style={{}}>
                <li>I enjoy solving puzzles.</li>
                <li>I love to learning new things.</li>
                <li>I like working with computers.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
