import Git from '../../assets/svg/git.png';
import JavaScript from '../../assets/svg/javascript.png';
import React from '../../assets/svg/react.png';
import Redux from '../../assets/svg/redux.png';
import Sass from '../../assets/svg/sass.png';
import Heroku from '../../assets/svg/heroku.png';
import MongoDB from '../../assets/svg/mongodb.png';
import PostgreSQL from '../../assets/svg/postgresql.png';
import NodeJS from '../../assets/svg/nodejs.png';
import HTML from '../../assets/svg/html.png';
import CSS from '../../assets/svg/css.png';
import Vercel from '../../assets/svg/vercel.png';
import Sequelize from '../../assets/svg/sequelize.png';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../../components/animatedLetters';
import './index.scss'

function About() {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const technologies = [
    { name: "HTML", url: "https://developer.mozilla.org/en/docs/Web/HTML", image: HTML },
    { name: "CSS", url: "https://developer.mozilla.org/en/docs/Web/CSS", image: CSS },
    { name: "SASS", url: "https://sass-lang.com/", image: Sass },
    { name: "JavaScript", url: "https://www.javascript.com/", image: JavaScript },
    { name: "NodeJS", url: "https://nodejs.org/en/", image: NodeJS },
    { name: "React", url: "https://reactjs.org/", image: React },
    { name: "Redux", url: "https://redux.js.org/", image: Redux },
    { name: "PostgreSQL", url: "https://www.postgresql.org/", image: PostgreSQL },
    { name: "Sequelize", url: "https://sequelize.org/", image: Sequelize },
    { name: "MongoDB", url: "https://www.mongodb.com/", image: MongoDB },
    { name: "Heroku", url: "https://www.heroku.com/", image: Heroku },
    {name: "Vercel", url: "https://vercel.com/", image: Vercel},
    { name: "Git", url: "https://git-scm.com/", image: Git }
  ];

  const firtsTitle = ['T', 'e', 'c', 'u', 'e', 'n', 't', 'o', 'u', 'n', 'p', 'o', 'c', 'o', 'a', 'c', 'e', 'r', 'c', 'a', 'd', 'e', 'm', 'i']
  const secondTitle = ['M', 'i', 's', 't', 'e', 'c', 'n', 'o', 'l', 'o', 'g', 'i', 'a', 's', 'y', 'h', 'e', 'r', 'r', 'a', 'm', 'i', 'e', 'n', 't', 'a', 's']

  return (
    <div className="container-about">
      <div className="about-left">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={firtsTitle} idx={40} />
        </h1>
        <h2>Soy Enzo, de Argentina, Corrientes, tengo 20 años y soy un
       desarrollador Full Stack graduado del bootcampt de Soy Henry, 
        siempre estoy viendo cosas nuevas tales como tecnologias, diseños,
        frameworks, librerías y demas cosas para poder mejorarme y mejorar. </h2> 
        <div>

        </div>
      </div>
      <div className="about-right">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={secondTitle} idx={70} />
        </h1>
        <div className="about-cards">
          <ul>
            {technologies.map((tech) => (
              <li key={tech.name} title={tech.name}>
                <a href={tech.url} rel="noreferrer" target="_blank">
                  <img src={tech.image} alt={tech.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About