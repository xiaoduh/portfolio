import React from "react";
import "./header.css";
import Btn from "./Btn"
import ME from "../../assets/img/me.png"
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Clément</h1>
      <h5 className="text-light">Développeur ReactJS</h5>
      <Btn />
      <HeaderSocial />

      <div className="me">
        <img src={ME} alt="clément-lidar-développeur-reactjs" />
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>

      
    </div>
  </header>;
};

export default Header;
