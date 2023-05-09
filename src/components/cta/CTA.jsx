import React from 'react';
import './cta.css';
import { useSelector } from 'react-redux';

function CTA() {
  const { userInfo } = useSelector(state => state.auth);
  return (
    <div className="immi__cta">
      <div className="immi__cta-containt">
        <h3>List of Volunteers</h3>
        { userInfo !== null ?  (
            <p>Connent With one of our Volunteers and get help and supprt.</p>  
         ) : (
          <p>Register yourself with IMMI CONNECT in order to use all the features</p>  
         )
         }
      </div>
      {
        userInfo === null && (
          <div className="immi__cta-btn">
            <button>Sign Up</button> 
          </div>  
        )
      }
    </div>
  )
}

export default CTA