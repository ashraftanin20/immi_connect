import React from 'react';
import './feature.css';
import { Link } from 'react-router-dom';

function Feature({id, title, text}) {
  return (
    <div className="immi__features-container__feature">
      <div className="immi__features-container__feature-title">
        <div />
        <h1><Link to={`http://localhost:3000/posts/${id}`}>{title}</Link></h1>
      </div>
      <div className="immi__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature