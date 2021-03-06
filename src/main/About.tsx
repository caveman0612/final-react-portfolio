import React from "react";
import TitleLetter from "./hero/TitleLetter";

const About = () => {
  const aboutMe = "About Me"
    .split("")
    .map((letter, idx) => <TitleLetter key={idx} letter={letter} />);

  return (
    <div id="about" style={{}} className=" border-bottom py-5">
      <div
        className="d-flex justify-content-center mb-5"
        style={{ height: "70px" }}
      >
        {aboutMe}
      </div>
      <div className="container w-75">
        <p>
          I have always been good with computers, but in college, I discovered
          programming. After a few weeks I feel in love with it. I had been
          doing it for fun since the pandemic started, but about a year ago, I
          realized that I wanted to do this as a career.
        </p>
        <br />
        <p>
          From my time in the military and being a math tutor I am very
          disciplined which has allowed me to teach myself a fair amount of
          programming fundamentals, but I am hoping Thinkful can fill the gaps
          in my knowledge.
        </p>
        <br />
        <p>
          Over the years I have had the oppertunity to work with many people
          from all over the world. This gave me the oppurtunity to learn how to
          be flexible to a variety of team dynamics.
        </p>
        <br />
        <p>
          When I am not programming I like to craft stuff. I have been doing
          carpentry and woodcarving since I was a very young, but over the
          passed few years I have started getting into 3d printing and learning
          how to 3d model using CAD software.
        </p>
      </div>
    </div>
  );
};

export default About;
