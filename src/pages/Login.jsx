import React from 'react';
import { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
import { useNavigate } from 'react-router-dom';
import api from '../helpers/axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const navigate = useNavigate();
  const { setLogin } = useContext(MyContext);

  const submitLogin = async (
    event,
    username,
    password
  ) => {
    event.preventDefault();
    setLogin(username);
    const request = await api
      .post('/login', { username, password })
      .catch(() => false);
    if (!request) {
      setWrongCredentials(true);
    } else {
      navigate('/home');
    }
  };

  return (
    <div>
      <form
        className="main-frame"
        onSubmit={(event) => submitLogin(event, username, password)}
      >
        <div>
          <h1 className="display-3 title-sign">
            Welcome
            <br />
            Back
          </h1>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setUsername(event.target.value)}
            id="username-input"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
            id="password"
          />
        </div>
        <a href={`${window.location.origin}/register`} className="signup-link">
          Create your account.
        </a>
        <div>
          {wrongCredentials && (
            <div className="alert alert-warning" role="alert">
              Invalid username or password. Please try again.
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary register-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
