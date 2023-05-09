import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import defaulProfile from '../../assets/user-profile.svg';
import { getVolunteer } from "../../features/actions/UserAction";
import { sendMessage } from "../../features/actions/MessageAction";


function Volunteer() {
const { userInfo } = useSelector(state => state.auth);
const { id } = useParams();
const dispatch = useDispatch();
const titleRef = useRef();
const messageRef = useRef();
const { volunteer, volunteerLoading, volunteerError } = useSelector(state => state.volunteerData);
const { messageLoading, messageError, messageLoaded } = useSelector(state => state.messageData);

const handleSubmit = (e) => {
    e.preventDefault()
    // TODO CREATE SEND MESSAGE 
    const payload = {
        subject: titleRef.current.value,
        message_body: messageRef.current.value,
        sender_id: parseInt(userInfo.user.id),
        receiver_id: id,
    }

    const message = dispatch(sendMessage(payload));
    if (message){
        titleRef.current.value = "";
        messageRef.current.value = "";
    }
}


useEffect(() => {
    dispatch(getVolunteer(id)); 
    
}, [dispatch, id]);

return (
<div className="immi__form-container section__margin">
    <div>
      <div className="immi__form-heading">
        <h1 className="gradient__text">Volunteer Contact Page</h1>
        <p>Volunteer Details</p>
        {volunteerLoading && (<LoadingBox>Loading...</LoadingBox>)}
        {volunteerError && (<MessageBox variant="danger">{volunteerError}</MessageBox>)}
        </div>
        {volunteer !== null ? (
               <div className="immi__profile-form">
               <div className="immi__profile-form__left">      
                   <img src={volunteer.image || defaulProfile} alt="user porofile" />
               </div>
               <div className="immi__profile-form__right">
                   <h3><strong>Name: </strong>{volunteer.data.name}</h3>
                   <h3><strong>Support Type</strong>: {volunteer.data.support_type}</h3>
                   <br />
                   
               </div>
             </div>
        ) : (
          <div>
            <p>Sorry, no details available!</p>
          </div>
        )}

      </div>
      <div>
      {userInfo === null ? (
            <div className="immi__form"><p>Please <Link to={'http:/localhost:3000/login'} >login</Link> to contact with volunteer!</p></div>
       ):(  
            <form className='immi__form' onSubmit={handleSubmit}>
                <div className='immi__form-heading'>
                    <h2 className="gradient__text">Send Message</h2>
                    {messageLoading && (<LoadingBox><p>Loading...</p></LoadingBox>)}
                    {messageError && (<MessageBox variant="danger"><p>{messageError}</p></MessageBox>)}
                </div>
                <div className='immi__form-group'>
                    <input ref={titleRef} name="title" 
                    placeholder="Your Message Subject" />
                </div>
                <div className='immi__form-group'>
                    <textarea rows={6} ref={messageRef} name="message" 
                    placeholder="Enter your comment here" />
                </div>
                
                <div className='immi__form-group'>
                    <br />
                    <button type='submit'>{messageLoading ? ("Adding ..."): "Send Message"}</button>
                </div>
                <div className='immi__form-group'>
                {messageLoaded && <p>Your message was sent successfully!</p>}
                </div>
            </form>
             
          )
        }
      </div>
    </div>
)
}

export default Volunteer;