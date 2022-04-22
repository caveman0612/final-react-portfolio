import React from "react";
import Project from "./Project";
import TitleLetter from "../main/hero/TitleLetter";

const Projects = () => {
  //   Recipe Application | GitHub
  // Created an app to store recipes and information about those recipes.
  // Used React to allow for dynamic adding and deleting of recipes.
  // Designed and utilized the test-driven development method.
  // Technology: React, JavaScript, Vercel.

  return (
    // <div  style={{}} className="">
    <div
      id="projects"
      className="container d-flex flex-column border-bottom py-5"
    >
      <div className="d-flex mb-5 align-self-center" style={{ height: "70px" }}>
        {"Projects".split("").map((letter, idx) => (
          <TitleLetter letter={letter} key={idx} />
        ))}
      </div>
      <div className="accordion" id={`accordionExample`}></div>
      <Project
        idx="1"
        title="Todo Tracking Application (Trello Clone)"
        githubLink="https://github.com/caveman0612/trello-app-ts-v4"
        viewLink="https://trello-app-ts-v4.vercel.app/"
        listItems={[
          "Designed an app to make multiple folders with as many notes as needed.",
          "Used Redux which allowed easy management of complex states.",
          "Implemented React Beautiful Drag and Drop to manipulate the folders and cards.",
        ]}
        tech={
          "JavaScript, React, HTML5, Bootstrap, Redux/Redux-toolkit, Vercel"
        }
      />
      <Project
        idx="2"
        title="Weather Application"
        githubLink="https://github.com/caveman0612/weather-app-react"
        viewLink="https://weather-app-react-kappa.vercel.app/"
        listItems={[
          "Searches weather using the open weather map api.",
          "Can search by city, zip code and latitude/longitude.",
          "Designed UI with bootstrap to allow for responsive design.",
        ]}
        tech={"JavaScript, React, HTML5, Bootstrap, Git/Github, Vercel"}
      />
      {/* <Project
        idx="4"
        title="Restaurant Reservation Application"
        githubLink="https://github.com/caveman0612/weather-app-react"
        viewLink="https://weather-app-react-kappa.vercel.app/"
        listItems={[
          "Searches weather using the open weather map api.",
          "Can search by city, zip code and latitude/longitude.",
          "Designed UI with bootstrap to allow for responsive design.",
        ]}
        tech={[
          "JavaScript ES6",
          "React",
          "HTML5",
          "CSS3",
          "Bootstrap",
          "Git/Github",
        ]}
      /> */}
      <Project
        idx="3"
        title="Study Tool (flashCards) Application"
        githubLink="https://github.com/caveman0612/weather-app-react"
        viewLink="https://weather-app-react-kappa.vercel.app/"
        listItems={[
          "Created a frontend application that allows users to create, edit, delete, and study.",
          "Defined frontend routes with React Router, syncing each new view to prevent stale data.",
          "Implemented Redux to allow for management of complex states.",
        ]}
        tech={
          "JavaScript, React, HTML5, Bootstrap, React-Router, Redux, Heroku"
        }
      />
    </div>
  );
};

export default Projects;
