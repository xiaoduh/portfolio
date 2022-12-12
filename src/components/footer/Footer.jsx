import React from 'react';
import './footer.css'
import { ImLinkedin } from 'react-icons/im';
import { ImTwitter } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/xiaoduh" className='footer__logo'>Clément Lidar</a>

            <ul className='permalinks'>
                <li><a href="#">Accueil</a></li>
                <li><a href="#experience">Savoirs faire</a></li>
                <li><a href="#projet">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
            <a href="https://www.linkedin.com/in/cl%C3%A9ment-lidar-48081192/" target="_blank"><ImLinkedin /></a>
            <a href="https://github.com/xiaoduh" target="_blank"><BsGithub /></a>
            <a href="https://twitter.com/clement_ldr" target="_blank"><ImTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Fait <span>👐</span> par CLIDAR</small>
            </div>
            
        </footer>
    )
};

export default Footer;