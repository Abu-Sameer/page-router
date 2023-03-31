import React, { useState } from 'react';
import './RegisterPage.css';
import { NavLink } from 'react-router-dom';

export default function RegisterPage() {
  const [show, setShow] = useState(true);

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    middlename: '',
    mothername: '',
    email: '',
    dob: '',
    gender: '', //select type
    relationship: '', //select type
    country: '',
    state: '',
    town: '',
    placeofbirth: '',
    address: '',
    employment: { employed: '', selfEmployed: '', unemployed: '' }, //Radio type
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

  function handleSubmit(e) {
    e.preventDefault();
    setShow(false);
  }

  return (
    <div>
      <div className="register-main">
        {show ? (
          <fieldset>
            <legend className="leg">Fill your full details</legend>
            <div className="information-form">
              <form onSubmit={handleSubmit}>
                <div className="form-name">
                  <fieldset>
                    <legend>Full name</legend>
                    <div className="name-data">
                      <label>
                        First Name
                        <input
                          required
                          autoFocus
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
                          required
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
                          required
                          type="text"
                          name="middlename"
                          value={data.middlename}
                          onChange={handle}
                          placeholder="Middle name"
                        />
                      </label>
                      <label>
                        Mother's Name
                        <input
                          required
                          type="text"
                          name="mothername"
                          value={data.mothername}
                          onChange={handle}
                          placeholder="Mother's name"
                        />
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div className="gender-relationship-status-body">
                  <fieldset>
                    <legend> Gender & Relationship status </legend>
                    <div className="gender-relationship-status">
                      <label>
                        Date of birth
                        <input
                          required
                          className="dob"
                          type="date"
                          name="dob"
                          value={data.dob}
                          onChange={handle}
                        />
                      </label>
                      <label>
                        Gender
                        <select
                          required
                          value={data.gender}
                          name="gender"
                          onChange={handle}
                        >
                          <option value="">--Choose gender--</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="none">None</option>
                        </select>
                      </label>
                      <label>
                        Relationship
                        <select
                          required
                          value={data.relationship}
                          onChange={handle}
                          name="relationship"
                        >
                          <option value="">
                            --Choose relationship status--
                          </option>
                          <option value="single">Single</option>
                          <option value="married">Married</option>
                          <option value="divorced">Divorced</option>
                          <option value="widow">Widow</option>
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
                          required
                          type="text"
                          name="country"
                          value={data.country}
                          onChange={handle}
                          placeholder="Country"
                        />
                      </label>
                      <label>
                        State of origin
                        <input
                          required
                          type="text"
                          name="state"
                          value={data.state}
                          onChange={handle}
                          placeholder="State of origin"
                        />
                      </label>
                      <label>
                        Home town
                        <input
                          required
                          type="text"
                          name="town"
                          value={data.town}
                          onChange={handle}
                          placeholder="Home town"
                        />
                      </label>
                      <label>
                        Place of birth
                        <input
                          required
                          type="text"
                          name="placeofbirth"
                          value={data.placeofbirth}
                          onChange={handle}
                          placeholder="Place of birth"
                        />
                      </label>
                      <label>
                        Email
                        <input
                          required
                          type="email"
                          name="email"
                          value={data.email}
                          onChange={handle}
                          placeholder="Email"
                        />
                      </label>
                      <label>
                        Current home address
                        <input
                          required
                          type="text"
                          name="address"
                          value={data.address}
                          onChange={handle}
                          placeholder="Residential address"
                        />
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div className="employment">
                  <fieldset>
                    <legend>Employment</legend>
                    Are you employed ?
                    <div className="employment-info">
                      <label htmlFor="employed">
                        Employed
                        <input
                          required
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
                        Self-employed
                        <input
                          required
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
                        Unemployed
                        <input
                          required
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
                    <legend>Next of kin details</legend>
                    <div className="nextofkindetail">
                      <label>
                        Name of next of kin
                        <input
                          required
                          type="text"
                          name="nextOfKins"
                          value={data.nextOfKins}
                          onChange={handle}
                          placeholder="Next of kin name"
                        />
                      </label>
                      <label>
                        Next of kin relationship
                        <input
                          required
                          className="nextOfKinsrelationship"
                          type="text"
                          name="nextOfKinsrelationship"
                          value={data.nextOfKinsrelationship}
                          onChange={handle}
                          placeholder="Next of kin relationship"
                        />
                      </label>
                      <label>
                        Address of next of kin
                        <input
                          required
                          type="text"
                          name="nextOfKinsaddress"
                          value={data.nextOfKinsaddress}
                          onChange={handle}
                          placeholder="Next of kin address"
                        />
                      </label>
                      <label>
                        Next of kin number
                        <input
                          required
                          className="nextOfKinsnumber"
                          type="number"
                          name="nextOfKinsnumber"
                          value={data.nextOfKinsnumber}
                          onChange={handle}
                          placeholder="Next of kin phone number"
                        />
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div className="button">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </fieldset>
        ) : (
          <fieldset>
            <legend>Here are your details</legend>
            <div className="register-data">
              <div className="register-names">
                <p>First name: {data.firstname}</p>
                <p>Last name: {data.lastname}</p>
                <p>Middle name: {data.middlename}</p>
              </div>

              <div className="register-bio">
                <p>Date of birth: {data.dob}</p>
                <p>Gender: {data.gender}</p>
                <p>Relationship status: {data.relationship}</p>
              </div>

              <div className="register-address">
                <p>Nationality: {data.country}</p>
                <p>State: {data.state}</p>
                <p>Town: {data.town}</p>
                <p>Place of birth: {data.placeofbirth}</p>
                <p>Email address: {data.email}</p>
                <p>Current home address: {data.address}</p>
              </div>

              <div className="register-employment">
                <p>Employment status: {data.employment.id}</p>
              </div>

              <div className="register-next-of-kins">
                <p>Next of kins name: {data.nextOfKins}</p>
                <p>Next of kins relationship: {data.nextOfKinsrelationship}</p>
                <p>Next of kins address: {data.nextOfKinsaddress}</p>
                <p>Next of kins number: {data.nextOfKinsnumber}</p>
              </div>

              <span className="button">
                <NavLink className="Navlink" to="/signup">
                  Sign up
                </NavLink>
              </span>
            </div>
          </fieldset>
        )}
      </div>
    </div>
  );
}
