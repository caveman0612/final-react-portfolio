import React from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./hero/Header";
import Projects from "../Projects/Projects";

const Index = () => {
  return (
    <div className="bg-light">
      <Header />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
