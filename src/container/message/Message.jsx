import React, { useEffect, useState } from 'react';
import './message.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../features/actions/MessageAction';
import { useNavigate } from 'react-router-dom';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';

function Message() {
    const [indboxActive, setInboxActive] = useState(true);
    const { userInfo } = useSelector(state => state.auth);
    const { messages, messagesLoading, messagesError } = useSelector(state => state.messagesData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadInbox = () => {
        setInboxActive(true);
        dispatch(getMessages({inbox: true, user_id: userInfo.user.id}));
    }

    const loadSentMessag = () => {
        setInboxActive(false);
        dispatch(getMessages({inbox: false, user_id: userInfo.user.id}));
    }
    useEffect(() => {
        if(userInfo === null) {
            navigate('/');
        } else {
            dispatch(getMessages({inbox: indboxActive, user_id: userInfo.user.id}));
        }
        
    },[dispatch, navigate, userInfo, indboxActive]);
  return (
    <div className='immi__message-container'>
        <div className='immi__message-header'>
            <h2 className='gradient__text'>Your Messages</h2>
            <div>
                <button className='default-button' autoFocus onClick={loadInbox}>Inbox</button>
                <button className='default-button' onClick={loadSentMessag}>Sent</button>
            </div>
            
        </div>
        <div className='immi_message-body'>
            {messagesLoading && (<LoadingBox>Loading messages...</LoadingBox>)}
            {messagesError && (<MessageBox variant="danger">{messagesError}</MessageBox>)}
            {(messages === null || messages.data.length === 0)  ? (
                 (<div><p>No Message!</p></div>)
            ) : (
                <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Message</th>
                        <th>{ indboxActive ? "Sender" : "Receiver"}</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.data.map((message, index) => (
                        <tr key={index}>
                        <td><p>{message.subject}</p></td>
                        <td><p>{message.message_body}</p></td>
                        <td><p>{indboxActive ? message.sender_name : message.recipient_name}</p></td>
                        <td><p>{message.created_at}</p></td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
            )
            }
        </div>
    </div>
  )
}

export default Message