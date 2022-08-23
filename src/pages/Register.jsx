import React from 'react';
import { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
import { useNavigate } from 'react-router-dom';
import api from '../helpers/axios';
import registerValidation from '../validations/register';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const navigate = useNavigate();
  const { setLogin } = useContext(MyContext);

  const submitRegister = async (
    event,
    username,
    password,
    email
  ) => {
    event.preventDefault();
    if (registerValidation(email, username, password)) {
      setLogin(username);
      const request = await api
        .post('/register', { username, password, email })
        .catch(() => false);
      if (!request) {
        setWrongCredentials(true);
      } else {
        navigate('/');
      }
    } else {
      setWrongCredentials(true);
    }
  };

  return (
    <div>
      <form
        className="main-frame"
        onSubmit={(event) => submitRegister(event, username, password, email)}
      >
        <div>
          <h1 className="display-3 title-sign">
            Create
            <br />
            Account
          </h1>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="user@mail.com"
            id="username-input"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            placeholder="More than 3 characters"
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
            placeholder="More than 3 characters"
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
            id="password"
          />
        </div>
        <a href={`${window.location.origin}`} className="signup-link">
          Already have an account? Sign-In
        </a>
        <div>
          {wrongCredentials && (
            <div
              className="alert alert-warning"
              style={{ marginTop: '16px' }}
              role="alert"
            >
              Invalid credentials. Please, try again.
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

export default Register;
