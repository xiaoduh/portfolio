import React from 'react';
import "./portfolio.css";
import IMG1 from '../../assets/img/portfolio1.jpg'
import IMG2 from '../../assets/img/portfolio2.jpg'
import IMG3 from '../../assets/img/algo.png'
import IMG4 from '../../assets/img/portfolio4.jpg'
import IMG5 from '../../assets/img/portfolio3.jpg'
import IMG6 from '../../assets/img/emailjs.png'
import IMG7 from '../../assets/img/portfolio6.jpg'
import IMG8 from '../../assets/img/Asset3.png'
import IMG9 from '../../assets/img/Asset3.png'

const data = [
    {
        id:5,
        image: IMG9,
        title: 'TKS APP',
        description: "App React Redux de gestion RH",
        github: "https://github.com/xiaoduh/App-Client-Redux",
        demo: 'https://github.com/xiaoduh/App-Client-Redux',
        techno: ['React', 'Redux', 'JS', 'SASS', 'Axios']
    },
    {
        id:5,
        image: IMG8,
        title: 'TKS API Express',
        description: "API CRUD NoSQL",
        github: "https://github.com/xiaoduh/App-Server-Express",
        demo: 'https://github.com/xiaoduh/App-Server-Express',
        techno: ['JS', 'NodeJs', 'Express', 'Mongoose', 'Axios', 'MongoDB']
    },
    {
        id:1,
        image: IMG7,
        title: 'Crypto Trending App',
        description: "App Front de visualisation de data",
        github: "https://github.com/xiaoduh/Crypto",
        demo: 'https://github.com/xiaoduh/Crypto',
        techno: ['JS', 'React', 'CSS', 'HTML']
    },
    {
        id:2,
        image: IMG6,
        title: 'Form Contact',
        description: "Form Template",
        github: "https://github.com/xiaoduh/ReactFormTemplate",
        demo: 'https://github.com/xiaoduh/ReactFormTemplate',
        techno: ['JS', 'React', 'CSS', 'HTML']
    },
    {
        id:3,
        image: IMG5,
        title: 'React World',
        description: "App Front de visualisation data",
        github: "https://github.com/xiaoduh/React-Map",
        demo: 'https://github.com/xiaoduh/React-Map',
        techno: ['JS', 'React', 'CSS', 'HTML']
    },
    {
        id:4,
        image: IMG4,
        title: 'Meal App',
        description: "App Front de visualisation data",
        github: "https://github.com/xiaoduh/meal-app",
        demo: 'https://github.com/xiaoduh/meal-app',
        techno: ['JS','CSS','HTML']
    },
    {
        id:6,
        image: IMG3,
        title: 'Algo',
        description: "Algo en JS",
        github: "https://github.com/xiaoduh/Algo-JS",
        demo: 'https://github.com/xiaoduh/Algo-JS',
        techno: ['JS']
    },
    {
        id:6,
        image: IMG2,
        title: 'Intégration HTML/CSS',
        description: "Intégration HTML/CSS de maquettes",
        github: "https://github.com/xiaoduh/HTML-CSS",
        demo: 'https://github.com/xiaoduh/HTML-CSS',
        techno: ['HTML', 'CSS']
    },
    {
        id:6,
        image: IMG1,
        title: 'Micro App JS',
        description: "Multiples petits projets JS",
        github: "https://github.com/xiaoduh/practice-JS",
        demo: 'https://github.com/xiaoduh/practice-JS',
        techno: ['HTML', 'CSS', 'JS']
    }
]




const Portfolio = () => {

    return (
<section id='projet'>
    <h5>Mes derniers projets</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
        {
            data.map(({id, image, title, description, github, demo, techno}) => {
                return (
        <article className='portfolio__item' key={id}>
            <div className="portfolio__item-img">
                <img src={image} alt={title} />
                <p><i>image non contractuelle</i></p>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="pins-techno">
                {techno.map((el) => (
                    <li key={el}>
                        <h4>{el}</h4>
                    </li>
                ))}
                </div>
                <div className="cta">
                <a href={github} className='btn'target='_blank'>Github</a>
                {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
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