import React from 'react'
import '../styles/Home.css'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name in Abraham</h2>
        <div className="prompt"> 
          <p>A software developer and computer scientist with interests in artificial intelligence and machine learning. </p> 
          <GitHubIcon onClick={() => {window.open('https://github.com/abemo', '_blank')}}/>
          <LinkedInIcon onClick={() => {window.open('https://www.linkedin.com/in/amooreodell/', '_blank')}}/>
          <EmailIcon onClick={() => {window.open('mailto:abemooreodell@gmail.com')}}/>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Artificial Intelligence</h2>
            <span>Cognitive Systems, Bayesian Networks, Reactive Agents, Machine Learning</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Python, Java, Javascript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home