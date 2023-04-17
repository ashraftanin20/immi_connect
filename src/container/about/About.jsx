import React from 'react';
import './about.css';
import Feature from '../../components/feature/Feature';

function About() {
  return (
    <div className="immi__about section__margin" id="about">
      <div className="immi__about-feature">
        <Feature title="What is Immi Connect?"
          text="Immi Connect is free indepent platform tries to connect volunteer and immigrations in order to make the immigration process easier for immigrants" />
      </div>
      <div className="immi__about-heading">
        <h1 className="gradient__text">
          Your always Supporting Partner during Immigration and Asylem Proccess.
        </h1>
        <p>Explore The Immi Connect</p>
      </div>
      <div className="immi__about-container">
        <Feature title="Translation" 
          text="You can find valunter translator to help you during your first months of your immigration process to help you with your essential process." />
        <Feature title="Consultancy"
          text="You can ask your questions here publicly and ask others to share expierences with you or you may find an expert and connect with privately." />
        <Feature title="Help and Support" 
          text="Any other help and support ..." />
      </div>
    </div>
  )
}

export default About