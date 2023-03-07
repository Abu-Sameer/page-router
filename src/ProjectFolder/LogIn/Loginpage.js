import React, { useState } from 'react';
import './LogInpage.css';
import { NavLink } from 'react-router-dom';

export default function Loginpage() {
  const [show, setShow] = useState(true);
  // const [catchs, setCatchs] = useState(true);

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    middlename: '',
    email: '',
    dob: '',
    gender: '', //select type
    relationship: '', //select type
    country: '',
    state: '',
    town: '',
    placeofbirth: '',
    address: '',
    employment: {
      employed: '',
      selfEmployed: '',
      unemployed: '',
    }, //Radio type
    nextOfKins: '',
    nextOfKinsaddress: '',
    nextOfKinsnumber: '',
    nextOfKinsrelationship: '',
    detail: false,
  });

  function handle(e) {
    const { name, type, value, checked } = e.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: type === 'checkBox' ? checked : value,
      };
    });
  }

  function holding(e) {
    e.preventDefault();
    setShow((prev) => !prev);
  }

  return (
    <div>
      <div className="register-main">
        <fieldset>
          <legend>fill in your correct details</legend>
          <div className="information-form">
            <form autoComplete="off" onSubmit={holding}>
              <div className="form-name">
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstname"
                    value={data.firstname}
                    onChange={handle}
                    placeholder="First name"
                  />
                </label>
                <label>
                  Last Name
                  <input
                    type="text"
                    name="lastname"
                    value={data.lastname}
                    onChange={handle}
                    placeholder="Last name"
                  />
                </label>
                <label>
                  Middle Name
                  <input
                    type="text"
                    name="middlename"
                    value={data.middlename}
                    onChange={handle}
                    placeholder="Middle name"
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handle}
                    placeholder="Email"
                  />
                </label>
              </div>

              <div className="login-gender-dob">
                <label>
                  Date of Birth
                  <input
                    className="dob"
                    type="date"
                    name="dob"
                    value={data.dob}
                    onChange={handle}
                    placeholder="Date of Birth"
                  />
                </label>
              </div>
              <div className="gender-relationship-status-body">
                <fieldset>
                  <legend> Gender & relationship status </legend>
                  <div className="gender-relationship-status">
                    <label>
                      Gender
                      <select
                        value={data.gender}
                        name="gender"
                        onChange={handle}
                      >
                        <option>--choose gender--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="none">None</option>
                      </select>
                    </label>
                    <label>
                      relationship
                      <select
                        value={data.relationship}
                        onChange={handle}
                        name="relationship"
                      >
                        <option value="">--choose relationship status--</option>
                        <option value="single">single</option>
                        <option value="married">married</option>
                        <option value="divorced">divorced</option>
                        <option value="widow">widow</option>
                      </select>
                    </label>
                  </div>
                </fieldset>
              </div>

              <div className="form-address">
                <fieldset>
                  <legend>User/Applicant Address</legend>
                  <div className="origin">
                    <label>
                      Nationality
                      <input
                        type="text"
                        name="country"
                        value={data.country}
                        onChange={handle}
                        placeholder="country"
                      />
                    </label>
                    <label>
                      State of Origin
                      <input
                        type="text"
                        name="state"
                        value={data.state}
                        onChange={handle}
                        placeholder="State of origin"
                      />
                    </label>
                  </div>
                  <div className="origin-town">
                    <label>
                      home town
                      <input
                        type="text"
                        name="town"
                        value={data.town}
                        onChange={handle}
                        placeholder="Home town"
                      />
                    </label>
                    <label>
                      place of birth
                      <input
                        type="text"
                        name="placeofbirth"
                        value={data.placeofbirth}
                        onChange={handle}
                        placeholder="place of birth"
                      />
                    </label>
                  </div>
                  <label>Current home Address</label>
                  <input
                    type="text"
                    name="address"
                    value={data.address}
                    onChange={handle}
                    placeholder="Residential Address"
                  />
                </fieldset>
              </div>

              <div className="employment">
                <fieldset>
                  <legend>employment</legend>
                  Are you employed ?
                  <div className="employment-info">
                    <label htmlFor="employed">
                      employed
                      <input
                        className="employmentbox"
                        type="radio"
                        name="employment"
                        value="employed"
                        onChange={handle}
                        checked={data.employment.employed}
                        id="employed"
                      />
                    </label>
                    <label htmlFor="selfEmployed">
                      self-Employed
                      <input
                        className="employmentbox"
                        type="radio"
                        name="employment"
                        value="selfEmployed"
                        onChange={handle}
                        checked={data.employment.selfEmployed}
                        id="selfEmployed"
                      />
                    </label>
                    <label htmlFor="unemployed">
                      unemployed
                      <input
                        className="employmentbox"
                        type="radio"
                        name="employment"
                        value="unemployed"
                        onChange={handle}
                        checked={data.employment.unemployed}
                        id="unemployed"
                      />
                    </label>
                  </div>
                </fieldset>
              </div>

              <div className="nextofkin">
                <fieldset>
                  <legend>next of kins</legend>
                  <label>
                    Name of next of kins
                    <input
                      type="text"
                      name="nextOfKins"
                      value={data.nextOfKins}
                      onChange={handle}
                      placeholder="next of kin name"
                    />
                  </label>
                  <label>
                    address of next of kin
                    <input
                      type="text"
                      name="nextOfKinsaddress"
                      value={data.nextOfKinsaddress}
                      onChange={handle}
                      placeholder="next of kin address"
                    />
                  </label>
                  <div className="nextofkindownpart">
                    <label>
                      next of kin relationship
                      <input
                        className="nextOfKinsrelationship"
                        type="text"
                        name="nextOfKinsrelationship"
                        value={data.nextOfKinsrelationship}
                        onChange={handle}
                        placeholder="next of kin relationship"
                      />
                    </label>
                    <label>
                      next of kin number
                      <input
                        className="nextOfKinsnumber"
                        type="number"
                        name="nextOfKinsnumber"
                        value={data.nextOfKinsnumber}
                        onChange={handle}
                        placeholder="next of kin Phone number"
                      />
                    </label>
                  </div>
                </fieldset>
              </div>
            </form>
            <div className="show-button">
              {show ? (
                <button
                  disabled={data.nextOfKinsnumber ? false : true}
                  onClick={holding}
                >
                  Submit
                </button>
              ) : (
                <div className="check-login">
                  {!data.detail ? (
                    <label>
                      Please confirm your details
                      <input
                        className="detail"
                        type="checkbox"
                        name="detail"
                        checked={data.detail}
                        onChange={handle}
                      />
                    </label>
                  ) : (
                    <NavLink className="Navlink" to="/login">
                      Log In
                    </NavLink>
                  )}
                </div>
              )}
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
