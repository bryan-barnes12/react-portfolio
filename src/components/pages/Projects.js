import React, { useState } from 'react';
import ProjectCard from './figures/ProjectCard';
import myTeamImg from './images/screenshot2.png';
import jeopardyImg from './images/jeopardy_game.png';
import techBlogImg from './images/techblog.png';
import weatherImg from './images/weatherImg.png';
import fitnessImg from './images/fitnessImg.png';
import budgetImg from './images/budgetImg.png';

const projectData = [
  {
    name: 'myTeam',
    imageSrc: myTeamImg,
    prev: 'progressive budget',
    next: 'JEOPARDY',
    description:
      "A full-stack web application designed to streamline the management of athletic teams and organizations.",
    dUrl: "https://abc-myteam.herokuapp.com/",
    rUrl: "https://github.com/BTDubbzzz/athletics-admin",
  },
  {
    name: 'JEOPARDY',
    imageSrc: jeopardyImg,
    prev: 'myTeam',
    next: 'TechBlog',
    description:
      "Using the JService and Dictionary.com APIs my team was successful in creating a user-friendly and responsive version of the popular game show Jeopardy.",
    dUrl: "https://bryan-barnes12.github.io/jeopardy-game/",
    rUrl: "https://github.com/bryan-barnes12/jeopardy-game.git",
  },
  {
    name: 'TechBlog',
    imageSrc: techBlogImg,
    prev: 'JEOPARDY',
    next: 'real-time weather',
    description:
      "This app was created written in JavaScript and uses the OpenWeather API to provide weather data.",
    dUrl: "https://evening-inlet-67692.herokuapp.com/",
    rUrl: "https://github.com/bryan-barnes12/tech-blog.git",
  },
  {
    name: "real-time weather",
    imageSrc: weatherImg,
    prev: 'TechBlog',
    next: 'fitness tracker',
    description: "This app was created written in JavaScript and uses the OpenWeather API to provide weather data.",
    dUrl: "https://bryan-barnes12.github.io/real-time-weather/",
    rUrl: "https://github.com/bryan-barnes12/real-time-weather.git",
  },
  {
    name: "fitness tracker",
    imageSrc: fitnessImg,
    prev: 'real-time weather',
    next: 'progressive budget',
    description: "This is a fitness tracker app that uses MongoDB and mongoose. The front end code was provided and I was tasked with creating the back-end.",
    dUrl: "https://bb-fitness-tracker.herokuapp.com/",
    rUrl: "https://github.com/bryan-barnes12/strong-password-generator.git",
  },
  {
    name: "progressive budget",
    imageSrc: budgetImg,
    prev: 'fitness tracker',
    next: 'myTeam',
    description: "This project is a budget app with offline functionality. Users can manage their budget even when they don't have access to the internet. Transactions are stored locally and then uploaded once they're back online. All pages are cached so the user experience isn't changed when in offline mode.",
    dUrl: "https://bb-progressive-budget.herokuapp.com/",
    rUrl: "https://github.com/bryan-barnes12/budget-tracker.git",
  },
]

export default function Projects() {
  const [currentTab, setCurrentTab] = useState('myTeam');

  const handleTabChange = (tab, dir) => {
    const projectTab = projectData.filter(project => project.name === tab);
    if (dir === 'next') {
      setCurrentTab(projectTab[0].next)
    }
    if (dir === 'prev') {
      setCurrentTab(projectTab[0].prev);
    }
  };


  return (
    <section id="projects" className="row">
    <div
      id="carouselExampleCaptions"
      className="carousel slide col-sm-7 col-lg-6"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {projectData.map((project, index) => {
          return <ProjectCard
            key={'project-' + index}
            name={project.name}
            desc={project.description}
            dUrl={project.dUrl}
            rUrl={project.rUrl}
            imgSrc={project.imageSrc}
            currentTab={currentTab === project.name ? 'carousel-item active' : 'carousel-item'}
             />
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        onClick={() => handleTabChange(currentTab, 'prev')}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={() => handleTabChange(currentTab, 'next')}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <article id="proj-head" className="column col-sm-5">
      <h2>projects</h2>
      <p>
        This is a small collection of projects I have been working on. Click
        the button for more information.
      </p>
      <br />
    </article>

  </section>
);
}
