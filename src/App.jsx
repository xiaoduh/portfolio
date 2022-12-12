import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Skill from "./components/skills/Skill"
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
