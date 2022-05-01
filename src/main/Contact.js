import React from "react";
import { BsGithub } from "react-icons/bs";
import TitleLetter from "./hero/TitleLetter";
import { AiTwotoneMail, AiFillPhone, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const contact = "Contact"
    .split("")
    .map((letter, idx) => <TitleLetter letter={letter} key={idx} />);
  return (
    <div id="contact" className="d-flex align-items-center flex-column pt-5">
      <div
        className="mb-5 d-flex justify-content-center"
        style={{ height: "70px" }}
      >
        {contact}
      </div>

      <div className="d-flex flex-column justify-content-center">
        <span className="">
          {" "}
          <AiTwotoneMail /> kyle.d.stinar@gmail.com
        </span>
        <span className="">
          {" "}
          <AiFillPhone /> 253-252-1896
        </span>
      </div>
      <div className="icons my-5">
        <a
          href="https://github.com/caveman0612"
          className="me-1 btn"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/kyle-d-stinar/"
          className="me-1 btn"
          style={{}}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={35} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
