import ReactGA from 'react-ga';
import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Skill from "./components/skills/Skill"
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


const App = () => {
  const TRACKING_ID = "UA-251871221-1";
  ReactGA.initialize(TRACKING_ID);
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
