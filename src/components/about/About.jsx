import React from 'react'
import "./about.css"
import {AiOutlineSmile} from 'react-icons/ai'
import ME from '../../assets/img/me-about.jpg'
import {IoIosCodeWorking} from 'react-icons/io'
import {AiTwotoneExperiment} from 'react-icons/ai'
import {BiEuro} from 'react-icons/bi'

const About = () => {
    return (
        <section id='about'>
            <h5>Développeur React,</h5>
            <h2>à votre service <AiOutlineSmile /></h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image"><img src={ME} alt="clement-lidar-développer-front-end-react-javascript" /></div>
                </div>
                <div className="about__content">
                    <div className="about__card">
                        <article className='card'>
                            <IoIosCodeWorking className='about__icon'/>
                            <small>4 projets réalisés avec React</small>
                        </article>
                        <article className='card'>
                            <AiTwotoneExperiment className='about__icon'/>
                            <small>1 an d'expérience avec React</small>
                        </article>
                        <article className='card'>
                            <BiEuro className='about__icon'/>
                            <small>TJM Attractif</small>
                        </article>
                    </div> 

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore id dolore soluta illum ab voluptatum consectetur asperiores, iste cum, sint aut hic, maxime voluptatibus molestiae eos eum facere corrupti! Animi, illo soluta a delectus earum voluptate accusamus totam sapiente alias?</p> 

                    <a href="#contact" className='btn btn-primary'>Discutons de votre projet</a>
                </div>
            </div>
        </section>
    );
};

export default About;