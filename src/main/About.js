import React from "react";
import TitleLetter from "./hero/TitleLetter";

const About = () => {
  return (
    <div id="about" style={{}} className="container border-bottom py-5">
      <div
        className="d-flex justify-content-center mb-5"
        style={{ height: "70px" }}
      >
        {"About Me".split("").map((letter, idx) => (
          <TitleLetter key={idx} letter={letter} />
        ))}
      </div>

      <p>
        I have always been good with computers, but in college, I discovered
        programming. After a few weeks I feel in love with it. I had been doing
        it as a hobby since, but about a year ago, I realized that I wanted to
        do this as a career.
      </p>
      <p>
        From my time in the military and being a math tutor. I am very
        disciplined which has allowed me to teach myself a far amount of
        programming fundamentals, but I am hoping Thinkful can fill the gaps in
        my knowledge and help me land my first job in the tech world.
      </p>
      <p>
        Over the years I have had to work with many people from all over the
        world. As a soldier I learned how to be flexible to what ever team
        dynamics are presented.
      </p>
      <p>
        When I am not programming I like to make stuff with wood. I have been
        doing carpentry and woodcarving since I was a little boy living in rural
        Minnesota.
      </p>
    </div>
  );
};

export default About;
