import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect ,useHistory} from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'
import PinterestIcon from '@material-ui/icons/Pinterest'
import SignUpFormModal from '../home/SignUpFormModal';
// import * as sessionActions from '../../store/session'

const LoginForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };
  // const demoUser = () => {
  //   setErrors([]);
  //   return dispatch(
  //     sessionActions.login({
  //       Email: "demo@aa.io",
  //       password: "password",
  //     })
  //   ).catch(async (res) => {
  //     const data = await res.json();
  //     if (data && data.errors) setErrors(data.errors);
  //   });
  // };
  const demoUser = (e) => {
    e.preventDefault();
    const demo = dispatch(login("demo@aa.com", "password"));
    history.push("/home")
  }


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      
      </div>
      <div className="modal">
        
        <div className="modal_form_box">
        <div className="modal_form_logo">
          <PinterestIcon style={{ fontSize: 40}}/>
        </div>
        <div className="modal_form_script">Welcome to SafetyPinterest</div>
        <div className="close"></div>
        <div className="modal_form_script"></div>
        <div className="input_button">
          <div className ="input_border">
            <label className="login_label" htmlFor='email'></label>
            <input className="login_input"
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
        <div className="spacing"></div>
        <div>
          <label className="login_label" htmlFor='password'></label>
          <input className="login_input"
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <div className="login_form_spacing"></div>
          <button className="button_modal" type='submit'>Login</button>
          <div className="spacing"></div>
          <button className="demo_user_modal"
          type='submit' onClick={demoUser}>Demo User</button>
        </div>
        <button className="redirect">
        {/* <SignUpFormModal /> */}
        Not on Safetypinterest yet? Sign up
        </button>
        {/* <a className="redirect-link" href= "<SignupFormModal/>">Sign up</a> */}
        </div>

        </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
