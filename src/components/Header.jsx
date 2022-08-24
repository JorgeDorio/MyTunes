import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';

const Header = () => {
  const { setSearchedTerm, buttonState, setButtonState, search, setSearch } = useContext(MyContext);
  const [login, setLogin] = useState('')

  const submitSearch = (event) => {
    event.preventDefault();
    setSearchedTerm(search);
    setButtonState(!buttonState)
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    setLogin(user)
  }, [])

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-light" style={{ borderRadius: 10 }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{`Hi, ${login}!`}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href={`${window.location.origin}/home`}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`${window.location.origin}/favorites`}>
                  Favorites
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Profile</a>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              onSubmit={(event) => submitSearch(event)}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => setSearch(event.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
