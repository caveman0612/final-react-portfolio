import React from "react";
import image from "../../assets/avatar.png";

const Nav = () => {
  return (
    <div>
      {" "}
      <nav className="d-flex p-3 bg-info align-items-center">
        <a href="/" className="me-auto">
          <img
            src={image}
            alt="avatar"
            className={`ms-3 rounded-pill `}
            width="40px"
          />
        </a>

        {/* <h1 className="h2 me-auto text-dark">Kyle Stinar</h1> */}
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link link-dark" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-dark" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-dark" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link link-dark"
              href="https://docs.google.com/document/d/1-0-kI3NTxG-jRhqkq1KeTZenp8fcTYGYnvY-OD2NS5k/edit"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
