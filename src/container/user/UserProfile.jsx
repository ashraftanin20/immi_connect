import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import './profile.css';
import defaulProfile from '../../assets/user-profile.svg';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { getProfile } from '../../features/actions/ProfileAction';

function UserProfile() {
    const { userInfo } = useSelector(state => state.auth);
    const navitate = useNavigate();
    const dispatch = useDispatch();

    const { userProfile, profileLoading, profileError, profileLoaded } = useSelector(state => state.userProfileData)


    useEffect(() => {
      if(!userInfo) {
        navitate('/');
      }
      dispatch(getProfile(userInfo.user.id)); 
    }, [userInfo, navitate, dispatch]);
    
  return (
    <div className="immi__form-container section__margin">
        <div>
          <div className="immi__form-heading">
            <h1 className="gradient__text">Your Profile Data</h1>
            <p>Your profile</p>
            {profileLoading && (<LoadingBox>Loading...</LoadingBox>)}
            {profileError && (<MessageBox variant="danger">{profileError}</MessageBox>)}
            </div>
            <div className="immi__profile-form">
              <div className="immi__profile-form__left">      
                  <img src={userProfile.user.image || defaulProfile} alt="user porofile" />
              </div>
              <div className="immi__profile-form__right">
                  <p><strong>Name: </strong>{userProfile.user.name}</p>
                  <p><strong>Email: </strong>{userProfile.user.email}</p>
                  <p><strong>Telephone: </strong>{userProfile.user.telephone}</p>
                  <p><strong>I am a Volunteer: </strong>{userProfile.user.is_volunteer === 1 ? "Yes" : "No"}</p>
                  {userProfile.user.is_volunteer === 1 && (
                  <p><strong>What kind(s) of support I can provide: </strong>{userProfile.user.support_type}</p>)}
                <div className="immi__profile-form__group">
                  <br />
                  <button><Link to="/user/edit">Edit Profile</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default UserProfile