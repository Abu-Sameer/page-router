import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [login, setLogin] = useState({
    username: '',
    password: '',
    email: '',
    phonenumber: '',
    confirmpassword: '',
    rempassword: false, //checkbox
  });

  function handle(e) {
    const { name, type, value, checked } = e.target;

    setLogin((prevData) => {
      return {
        ...prevData,
        [name]: type === 'checkBox' ? checked : value,
      };
    });
  }

  function hold(e) {
    e.preventDefault();
  }

  let checkPassword = login.password === login.confirmpassword;
  let checkConfirm = login.password < 1 || login.confirmpassword < 1;

  let verifypassword = '';

  if (checkPassword) {
    verifypassword = 'password confirmed ✔️';
  } else {
    verifypassword = 'password not matched 🚫';
  }

  return (
    <div className="login-main">
      <fieldset>
        <legend>Log in</legend>
        <div className="login">
          <div className="login-data">
            <form autoComplete="off" onSubmit={hold}>
              <label>
                User name
                <input
                  type="text"
                  name="username"
                  value={login.username}
                  onChange={handle}
                  placeholder="username"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={login.email}
                  onChange={handle}
                  placeholder="Email"
                />
              </label>
              <label>
                Phone Number
                <input
                  type="number"
                  name="phonenumber"
                  value={login.phonenumber}
                  onChange={handle}
                  placeholder="phonenumber"
                />
              </label>
              <label>
                password
                <input
                  type="password"
                  name="password"
                  value={login.password}
                  onChange={handle}
                  placeholder="password"
                />
              </label>
              <label>
                confirm password
                <input
                  type="password"
                  name="confirmpassword"
                  value={login.confirmpassword}
                  onChange={handle}
                  placeholder="confirmpassword"
                />
              </label>
              <p className="checkPassword">
                {checkConfirm ? <p></p> : <p>{verifypassword} </p>}
              </p>
            </form>
          </div>

          <span>
            <label htmlFor="rempassword">Remember your password</label>
            <input
              checked={login.rempassword}
              onChange={handle}
              type="checkbox"
              name="rempassword"
              id="rempassword"
            />
          </span>
          <button
            disabled={checkPassword && !checkConfirm ? false : true}
            onClick={hold}
          >
            Log in
          </button>
        </div>
      </fieldset>
      <div>
        {login.username ? (
          <div className="login-details-output">
            <h3>here are your log in details</h3>
            <ul>
              <li>Your Username is: {login.username}</li>
              {login.email ? <li>Your Email is: {login.email}</li> : ''}
              {login.phonenumber ? (
                <li>Your Phone number is: {login.phonenumber}</li>
              ) : (
                ''
              )}
              {login.password ? (
                <li>Your password is: {login.password}</li>
              ) : (
                ''
              )}
              {login.rempassword ? <li>Your password is saved ✔️</li> : ''}
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
