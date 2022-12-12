import React from 'react';
import "./nav.css";
import {AiOutlineHome} from 'react-icons/ai';
import {AiTwotoneExperiment} from 'react-icons/ai';
import {FaReact} from 'react-icons/fa';
import {BiMailSend} from 'react-icons/bi';
import { useState } from 'react';


const Nav = () => {

    const[activeNav, setActiveNav] = useState("#")

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiTwotoneExperiment /></a>
            <a href="#projet" onClick={() => setActiveNav('#projet')} className={activeNav === '#projet' ? 'active' : ''}><FaReact /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMailSend /></a>
        </nav>
    );
};

export default Nav;