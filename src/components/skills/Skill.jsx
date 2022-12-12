import React from 'react';
import "./skill.css";
import {BsPatchCheckFill} from 'react-icons/bs'

const Skill = () => {
    return (
<section id="experience">
    <h5>Les technologies que j'utilise</h5>
    <h2>Mes compétences</h2>

    <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Développement</h3>
            <div className="experience__content">
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>JavaScript</h4>
                        <small className='experience__small'>Intermediaire</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>ReactJS</h4>
                        <small className='experience__small'>Intermediaire</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>HTML</h4>
                        <small className='experience__small'>Confirmé</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>CSS</h4>
                        <small className='experience__small'>Confirmé</small>    
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>Tailwind</h4>
                        <small className='experience__small'>Débutant</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>SASS</h4>   
                        <small className='experience__small'>Confirmé</small>    
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>ChartJS</h4>
                        <small className='experience__small'>Intermediaire</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>Rechart</h4>
                        <small className='experience__small'>Débutant</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>NPM/NodeJS</h4>
                        <small className='experience__small'>Intermediaire</small> 
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>Redux</h4>
                        <small className='experience__small'>Intermediaire</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>MongoDB/Mongoose</h4>
                        <small className='experience__small'>Intermediaire</small>
                    </div>
                </article>
            </div>
        </div>

        <div className="experience__frontend">
            <h3>Digital Marketing</h3>
            <div className="experience__content">
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>SEO</h4>
                        <small className='experience__small'>Confirmé</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>UI</h4>
                        <small className='experience__small'>Confirmé</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>UX</h4>
                        <small className='experience__small'>Intermediaire</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>Création de contenus</h4>
                        <small className='experience__small'>Confirmé</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>Community Management</h4>
                        <small className='experience__small'>Confirmé</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>Growth Marketing</h4>
                        <small className='experience__small'>Confirmé</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>Web Design</h4>
                        <small className='experience__small'>Débutant</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>Social Media</h4>
                        <small className='experience__small'>Intermediaire</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__icon'/>
                    <div>
                        <h4>SEA</h4>
                        <small className='experience__small'>Débutant</small>
                    </div>
                </article>
            </div>
        </div>
        
    </div>

</section>
    );
};

export default Skill;