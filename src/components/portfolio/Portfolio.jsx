import React from 'react';
import "./portfolio.css";
import IMG1 from '../../assets/img/portfolio1.jpg'
import IMG2 from '../../assets/img/portfolio2.jpg'
import IMG3 from '../../assets/img/portfolio3.jpg'
import IMG4 from '../../assets/img/portfolio4.jpg'
import IMG5 from '../../assets/img/portfolio5.png'
import IMG6 from '../../assets/img/portfolio6.jpg'

const data = [
    {
        id:1,
        image: IMG1,
        title: 'Crypto Trending App',
        github: "https://github.com/xiaoduh/Crypto",
        demo: 'https://github.com/xiaoduh/Crypto',
        techno: ['JS', 'React', 'CSS', 'HTML']
    },
    {
        id:2,
        image: IMG2,
        title: 'Form Contact',
        github: "https://github.com/xiaoduh/Crypto",
        demo: 'https://github.com/xiaoduh/Crypto',
        techno: ['JS', 'React', 'CSS', 'HTML']
    },
    {
        id:3,
        image: IMG3,
        title: 'Yoga App',
        github: "https://github.com/xiaoduh/Crypto",
        demo: 'https://github.com/xiaoduh/Crypto',
        techno: ['JS', 'React', 'CSS', 'HTML']
    },
    {
        id:4,
        image: IMG4,
        title: 'Recette App',
        github: "https://github.com/xiaoduh/Crypto",
        demo: 'https://github.com/xiaoduh/Crypto',
        techno: ['JSX', 'React', 'CSS', 'HTML']
    },
    {
        id:5,
        image: IMG5,
        title: 'Angry Bird',
        github: "https://github.com/xiaoduh/Crypto",
        demo: 'https://github.com/xiaoduh/Crypto',
        techno: ['JS', 'React', 'CSS', 'HTML']
    },
    {
        id:6,
        image: IMG6,
        title: 'Dashboard',
        github: "https://github.com/xiaoduh/Crypto",
        demo: 'https://github.com/xiaoduh/Crypto',
        techno: ['JS', 'React', 'CSS', 'HTML']
    }
]




const Portfolio = () => {

    return (
<section id='projet'>
    <h5>Mes derniers projets</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
        {
            data.map(({id, image, title, github, demo, techno}) => {
                return (
        <article className='portfolio__item' key={id}>
            <div className="portfolio__item-img">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="pins-techno">
                {techno.map((el) => (
                    <li key={el}>
                        <h4>{el}</h4>
                    </li>
                ))}
                </div>
                <div className="cta">
                <a href={github} className='btn'target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </div>
         </article>
                )
            })
        }
    </div>
</section>
    );
};

export default Portfolio;