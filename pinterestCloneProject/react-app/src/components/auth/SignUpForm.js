import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import PinterestIcon from '@material-ui/icons/Pinterest'
import './LoginForm.css'
import './SignupForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(first_name, last_name, username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }
 

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="modal">
        <div className="modal_form_box">
        <div className="modal_form_logo">
          <PinterestIcon style={{ fontSize: 40 }}/>
        </div>
        <div className="modal_form_script">Welcome to SafetyPinterest</div>
        <div className="new_ideas">Find new ideas to try</div>
        <div className="close"></div>
        <div className="modal_form_script"></div>
        <div className="input_button">
          <div className="input_border">
            <label></label>
            <input className="signup_input"
              placeholder='First Name'
              type='text'
              name='first_name'
              onChange={updateFirstName}
              value={first_name}
            />
          </div>
          <div className="input_border">
            <label></label>
            <input className="signup_input"
              placeholder='Last Name'
              type='text'
              name='last_name'
              onChange={updateLastName}
              value={last_name}
            />
          </div>
          <div className="input_border">
            <label></label>
            <input className="signup_input"
              placeholder='User Name'
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            />
          </div>
          <div className="input_border">
            <label></label>
            <input className="signup_input"
              placeholder='Email'
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className="input_border">
            <label></label>
            <input className="signup_input"
              placeholder='Create a password'
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div className="input_border">
            <label></label>
            <input className="signup_input"
              placeholder='Confirm Password'
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
            <button class="button_modal"type='submit'>Sign Up</button>
          </div>
          <div className="redirect">
          Already a member? Log in
          </div>
          {/* <a className="redirect-link" href= "<SignupFormModal/>">Sign up</a> */}
          
        </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
