import React, { useState } from 'react';
import './Signup.css';

export default function Signup() {
  const [Hold, setHold] = useState(false);
  const [checks, setChecks] = useState({
    rempassword: false,
  });

  const [signup, setSignup] = useState({
    username: '',
    password: '',
    email: '',
    phonenumber: '',
    confirmpassword: '',
  });

  function handle(e) {
    const { name } = e.target;
    setSignup((prevData) => {
      return {
        ...prevData,
        [name]: e.target.value,
      };
    });
  }

  function testing(e) {
    const { name, type, value, checked } = e.target;
    setChecks((prevData) => {
      return {
        ...prevData,
        [name]: type === 'checkBox' ? !checked : checked && value,
      };
    });

    if (!checks.rempassword) {
      alert('Did you want to save your password ?');
    } else {
      alert('Did you want to remove your saved password ?');
    }
  }

  function hold(e) {
    e.preventDefault();
    setHold(true);
  }

  let checkPassword = signup.password === signup.confirmpassword;
  let checkConfirm = signup.password < 1 || signup.confirmpassword < 1;

  let verifypassword = '';

  if (checkPassword) {
    verifypassword = 'Password confirmed ✔️';
  } else {
    verifypassword = 'Password not matched 🚫';
  }

  return (
    <div className="signup-main">
      <fieldset>
        <legend>Sign up</legend>
        <div className="signup">
          <div className="signup-data">
            <form onSubmit={hold}>
              <label>
                User name
                <input
                  autoFocus
                  required
                  type="text"
                  name="username"
                  value={signup.username}
                  onChange={handle}
                  placeholder="Username"
                />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={signup.email}
                  onChange={handle}
                  placeholder="Email"
                />
              </label>
              <label>
                Phone number
                <input
                  required
                  type="number"
                  name="phonenumber"
                  value={signup.phonenumber}
                  onChange={handle}
                  placeholder="Phone number"
                />
              </label>
              <label>
                Password
                <input
                  required
                  minLength={8}
                  type="password"
                  name="password"
                  value={signup.password}
                  onChange={handle}
                  placeholder="Password"
                />
              </label>
              <label>
                Confirm password
                <input
                  required
                  minLength={8}
                  type="password"
                  name="confirmpassword"
                  value={signup.confirmpassword}
                  onChange={handle}
                  placeholder="Confirm Password"
                />
              </label>
              <span className="checkPassword">
                {checkConfirm ? <p></p> : <p>{verifypassword} </p>}
              </span>
              <span>
                <label htmlFor="rempassword">
                  Remember your password
                  <input
                    className="check"
                    required
                    checked={checks.rempassword}
                    onChange={testing}
                    type="checkbox"
                    name="rempassword"
                    id="rempassword"
                  />
                </label>
                <button>Sign up</button>
              </span>
            </form>
          </div>
        </div>
      </fieldset>
      <div>
        {/* signup details */}
        <div>
          {Hold ? (
            <div className="signup-details-output">
              <h3>Here are your sign up details</h3>
              <ul>
                <li>Your username is: {signup.username}</li>
                {signup.email ? <li>Your email is: {signup.email}</li> : ''}
                {signup.phonenumber ? (
                  <li>Your phone number is: {signup.phonenumber}</li>
                ) : (
                  ''
                )}
                {signup.password ? (
                  <li>Your password is: {signup.password}</li>
                ) : (
                  ''
                )}
                {checks.rempassword ? (
                  <li>Your password is saved ✔️</li>
                ) : (
                  <li>Your password is not saved 🚫</li>
                )}
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
