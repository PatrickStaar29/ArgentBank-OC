import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSignInSuccess = () => {
    navigate('/profile');
  };

  const handleSignInClick = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    dispatch(loginUser(email, password, handleSignInSuccess))
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" id="email"/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password"/>
        </div>
        {/* <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div> */}
        <button type="button" className="sign-in-button" onClick={handleSignInClick}>
          Sign In
        </button>
      </form>
    </section>
  )
}

export default Form;
