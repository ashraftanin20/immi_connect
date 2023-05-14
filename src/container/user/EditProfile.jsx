import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './profile.css';
import defaulProfile from '../../assets/user-profile.svg';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { getProfile, updateProfile } from '../../features/actions/ProfileAction';

function EditProfile() {
    const { userInfo } = useSelector(state => state.auth);
    const navitate = useNavigate();
    const dispatch = useDispatch();

    const { userProfile, profileLoading, profileError, profileUpdated } = useSelector(state => state.userProfileData)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [image, setImage] = useState(defaulProfile);
    const [valunteer, setValunteer] = useState(false);
    const [supportType, setSupportType] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const payload = {
            name: name,
            email: email,
            telephone: telephone,
            image: image,
            is_volunteer: valunteer,
            support_type: supportType,
            token: userInfo.token,
            id: userInfo.user.id
          }
          dispatch(updateProfile(payload));
    }

    useEffect(() => {
      if(!userInfo) {
        navitate('/');
      }
      if(!userProfile){
        dispatch(getProfile(userInfo.user.id));
      } else {
        setName(userProfile.user.name || '');
        setEmail(userProfile.user.email || '');
        setTelephone(userProfile.user.telephone || '');
        setImage(userProfile.user.image || defaulProfile);
        setValunteer(userProfile.user.is_volunteer === 0 ? false : true);
        setSupportType(userProfile.user.support_type || '');
      }
      
    }, [userInfo, navitate, dispatch, userProfile]);
    
  return (
    <div className="immi__form-container section__margin" id="user-profile">
        <div>
          <div className="immi__form-heading">
            <h1 className="gradient__text">Your Profile Data</h1>
            <p>Update your profile data here</p>
            {profileLoading && (<LoadingBox>Loading...</LoadingBox>)}
            {profileError && (<MessageBox variant="danger">{profileError}</MessageBox>)}
            {profileUpdated && (<MessageBox variant="normal">"Your profile updated successfully!"</MessageBox>)}
          </div>
        <form className="immi__profile-form" onSubmit={submitHandler} >
            <div className="immi__profile-form__left">      
                <img src={image} alt="user porofile" />
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <div className="immi__profile-form__right">
              <div className="immi__profile-form__group">
                <p>Name:</p>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} name='name' placeholder="Your name" />
              </div>
              <div className="immi__profile-form__group">
                <p>Email:</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder="Your Email" />
              </div>
              <div className="immi__profile-form__group">
                <p>Telephone:</p>
                <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} name='telephone' placeholder="Telephone NO" />
              </div>
              <b />
              <div className="immi__profile-form__group">
                <p>Are you a Valunteer?</p>
                <input className="immi__profile-checkmark" 
                  onChange={() => setValunteer(!valunteer)} value={valunteer} type="checkbox" name='valunteer' />
              </div>
              {valunteer && (
                  <div className="immi__profile-form__group" id="suport-type">
                <p>Select The Support you can provide: </p>
                <select onChange={(e) => setSupportType(e.target.value)} value={supportType || ''}>
                  <option value="select">{' '}</option>
                  <option value="translate">Translate</option>
                  <option value="advice">Advice</option>
                  <option value="other">Other</option>
                </select>
              </div>
              )}
            
              <div className="immi__profile-form__group">
                <br />
                <button type='submit' className="default-btn">Update Profile</button>
            </div>
            </div>
        
          
        </form>
      </div>
    </div>
  )
}

export default EditProfile