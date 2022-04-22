import React from "react";

const Project = ({ title, githubLink, viewLink, listItems, tech, idx }) => {
  return (
    <div className="accordion-item mb-3">
      <h2 className="accordion-header" id={`heading${idx}`}>
        <button
          className="accordion-button bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${idx}`}
          aria-expanded="false"
          aria-controls={`collapse${idx}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${idx}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${idx}`}
        data-bs-parent={`accordionExample`}
      >
        <div className="accordion-body pe-3">
          <div className=" text-center">
            <a
              className="ps-2"
              href={githubLink}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a href={viewLink} target="_blank" rel="noreferrer">
              Live
            </a>
          </div>

          <div className="container row">
            <div className="col-8">
              <h3 className="text-center">Description</h3>
              <ul>
                {listItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-4 ps-5">
              <h3 className="h4">Languages/Tech Used</h3>
              <ul className="">
                {tech.split(" ").map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
