import React, { useEffect, useRef } from 'react';
import "./register.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/actions/RegisterAction';
import MessageBox from '../../components/MessageBox';
import LoadingBox from '../../components/LoadingBox';

function Register() {

    const navigate = useNavigate();
    const { userInfo } = useSelector(state => state.auth);
    const {user, registerError, registerLoading, registerSuccess } = useSelector((state) => state.signup);
    const dispatch = useDispatch();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: confirmPasswordRef.current.value,
          }
          if (payload.password !== payload.password_confirmation) {
          alert("Password does not match the confirm password!");
          } else {
              dispatch(registerUser(payload));
          }
    }

    useEffect(() => {
        if (userInfo !== null){
            navigate("/");
        } 
    }, [navigate, userInfo, registerSuccess]);

  return (
    <>
    { registerSuccess ? ( 
    <div className="immi__form-container section__margin" id="register">
         <div className="immi__form-heading">
          <h1 className="gradient__text">IMMI CONNECT Registration Page</h1>
          <p>You have been registered succeccfully!</p>
          <p>You can <Link to="/login" >Login</Link> now</p>
        </div>
      </div>
    ) : ( 
    <div className="immi__form-container section__margin" id="register">
        <div>
      <div className="immi__form-heading">
        <h1 className="gradient__text">IMMI CONNECT Registration Form</h1>
        <p>Please Register yourself here</p>
      </div>
        <form className="immi__form" onSubmit={submitHandler} >
        {registerLoading && <LoadingBox>Loading...</LoadingBox>}
        {registerError !== null && (<MessageBox variant="danger">{registerError}</MessageBox>)}
            <div className="immi__form-group">
                <p>Name:</p>
                <input type="text" ref={nameRef} name='name' placeholder="Your name" />
            </div>
            <div className="immi__form-group">
                <p>Email:</p>
                <input type="email" ref={emailRef} name='email' placeholder="Your Email" />
            </div>
            <div className="immi__form-group">
                <p>Password:</p>
                <input type="password" ref={passwordRef} name='password' placeholder="Password" />
            </div>
            <div className="immi__form-group">
                <p>Confirm Password:</p>
                <input type="password" ref={confirmPasswordRef} name='password' placeholder="Confirm Password" />
            </div>
            <div>
                <br />
                <button type='submit'>{registerLoading ? "submitting..." : "Register"}</button>
            </div>
            <br />
            <p>Already registered? <Link to='/login' style={{ color: '#fff'}}>Login</Link></p>
        </form>
      </div>
    </div>
  )}
  </>
  )
}

export default Register