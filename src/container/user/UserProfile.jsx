import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../features/actions/RegisterAction';
import './profile.css';
import defaulProfile from '../../assets/user-profile.svg';

function UserProfile() {
    const { userInfo } = useSelector(state => state.auth);
    const { user } = userInfo;
    const navitate = useNavigate();
    const dispatch = useDispatch();

    const [name, setNamet] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [telephone, setTelephone] = useState(user.telephone || '');
    const [image, setImage] = useState(user.photo || defaulProfile);

    const submitHandler = (e) => {
        e.preventDefault();
        const payload = {
            name: name,
            email: email,
           
          }
          if (payload.password !== payload.password_confirmation) {
          alert("Password does not match the confirm password!");
          } else {
              dispatch(registerUser(payload));
          }
    }
    useEffect(() => {
      if(!userInfo) {
        navitate('/');
      }
    }, [userInfo, navitate]);
    
  return (
    <div className="immi__form-container section__margin" id="user-profile">
        <div>
          <div className="immi__form-heading">
            <h1 className="gradient__text">Your Profile Data</h1>
            <p>Update your profile data here</p>
          </div>
        <form className="immi__profile-form" onSubmit={submitHandler} >
            <div className="immi__profile-form__left">
                <img src={image} alt="profile" />
            </div>
            <div className="immi__profile-form__right">
              <div className="immi__profile-form__group">
                <p>Name:</p>
                <input type="text" onChange={(e) => setNamet(e.target.value)} value={name} name='name' placeholder="Your name" />
              </div>
              <div className="immi__profile-form__group">
                <p>Email:</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder="Your Email" />
              </div>
              <div className="immi__profile-form__group">
                <p>Telephone:</p>
                <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} name='telephone' placeholder="Telephone NO" />
              </div>
              <div className="immi__profile-form__group">
                <br />
                <button type='submit' className="default-btn">Update</button>
            </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default UserProfile