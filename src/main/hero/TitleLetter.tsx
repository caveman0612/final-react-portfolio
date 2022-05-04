import React, { useState } from "react";

interface Iprop {
  letter: string;
}

const TitleLetter = ({ letter }: Iprop) => {
  const [hover, setHover] = useState(false);
  function activateHover() {
    setHover(true);
  }
  function deactivateHover() {
    setHover(false);
  }

  const space = letter === " " ? "me-3" : null;
  const hoverStyles = hover ? "text-info display-1 fw-bolder" : " display-3";
  return (
    <span
      className={`${hoverStyles} ${space} pe-auto fw-bold`}
      style={{ transition: "0.1s", cursor: "default" }}
      onMouseEnter={activateHover}
      onMouseLeave={deactivateHover}
    >
      {letter}
    </span>
  );
};

export default TitleLetter;
