import React from "react";

const Project = ({ title, githubLink, viewLink, listItems, idx }) => {
  return (
    <div className="accordion-item mb-3">
      <h2 className="accordion-header" id={`heading${idx}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${idx}`}
          aria-expanded="true"
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
        <div className="accordion-body">
          <div className="ms-4">
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

          <ul>
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
