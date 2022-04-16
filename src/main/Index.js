import React from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./hero/Header";
import Projects from "../Projects/Projects";
import Footer from "./Footer";

const Index = () => {
  return (
    <div className="bg-light">
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
