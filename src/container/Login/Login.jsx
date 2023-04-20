import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../features/actions/LoginAction';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { loadUser } from '../../features/AuthSlice';


function Login() {

  const {userInfo,userError, userLoading } = useSelector((state) => state.auth);
  const emailRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passRef.current.value,
    }
    dispatch(loginUser(payload));
  }
  useEffect(() => {
    if(userInfo) {
      navigate("/");
      dispatch(loadUser());
    }
  }, [userInfo, navigate, dispatch])
  return (
      <div className="immi__form-container section__margin" id="register">
        <div>
      <div className="immi__form-heading">
        <h1 className="gradient__text">IMMI CONNECT Login Form</h1>
        <p>Please enter your credintials and login here</p>
      </div>
        <form className="immi__form" onSubmit={handleLogin} >
             {userLoading && (<LoadingBox>Loading...</LoadingBox>)}
             {userError && (<MessageBox variant="danger">{userError}</MessageBox>)}
            <div className="immi__form-group">
                <p>Email:</p>
                <input type="email" ref={emailRef} name='email' placeholder="Your Email" />
            </div>
            <div className="immi__form-group">
                <p>Password:</p>
                <input type="password" ref={passRef} name='password' placeholder="Password" />
            </div>
            <div>
                <br />
                <button type='submit'>{userLoading ? (<LoadingBox>Loging in...</LoadingBox>) : "Login Me"}</button>
            </div>
            <br />
            <p>Not Registered yet? <Link to='/register' style={{ color: '#fff'}}>Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login