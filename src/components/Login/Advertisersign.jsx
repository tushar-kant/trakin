import React from 'react';
import './sign.css';
import { Outlet, Link } from "react-router-dom";
import profileimg from '../../images/Trackin-Logo.jpg';

function Advertisersign() {
  return (
    <>
      <div className="containers">

        <form className="form_container">
          <img src={profileimg} alt="" className="logo1" />

          <div className="title_container">
            <p className="title">Create an Advertiser Account</p>
            {/* <span className="subtitle">
              Please fill in the following details to create your account.
            </span> */}
          </div>
          <br />
          <div className="row">
            <div className="input_container2 col-6">
              <label className="input_label" htmlFor="name_field">
                Name
              </label>
              <input
                placeholder="Name"
                type="text"
                className="input_field"
                id="name_field"
              />
            </div>
            <div className="input_container2 col-6">
              <label className="input_label" htmlFor="company_field">
                Company
              </label>
              <input
                placeholder="Company"
                type="text"
                className="input_field"
                id="company_field"
              />
            </div>
          </div>
          <div className="row">
            <div className="input_container2 col-6">
              <label className="input_label" htmlFor="phone_field">
                Phone
              </label>
              <input
                placeholder="Phone"
                type="tel"
                className="input_field"
                id="phone_field"
              />
            </div>
            <div className="input_container2 col-6">
              <label className="input_label" htmlFor="skype_field">
                skype
              </label>
              <input
                placeholder="skype"
                type="text"
                className="input_field"
                id="skype_field"
              />
            </div>
          </div>
          <div className="input_container1">
            <label className="input_label" htmlFor="email">
              Email
            </label>
            <input
              placeholder="Email"
              type="email"
              className="input_field"
              id="email"
            />
          </div>
          <div className="row">
            <div className="input_container2 col-6">
              <label className="input_label" htmlFor="password">
                password
              </label>
              <input
                placeholder="password"
                type="password"
                className="input_field"
                id="password"
              />
            </div>
            <div className="input_container2 col-6">
              <label className="input_label" htmlFor="confirmpassword">
                Confirm password
              </label>
              <input
                placeholder=" password"
                type="password"
                className="input_field"
                id="confirmpassword"
              />
            </div>
          </div>
          <div className="row">
            <div className="input_container2 col-6">
              <label className="input_label" htmlFor="city_field">
                City
              </label>
              <input
                placeholder="City"
                type="text"
                className="input_field"
                id="city_field"
              />
            </div>
            <div className="input_container2 col-6">
              <label className="input_label" htmlFor="state_field">
                State
              </label>
              <input
                placeholder="State"
                type="text"
                className="input_field"
                id="state_field"
              />
            </div>
          </div>
          <div className="row">
            <div className="input_container2 col-6">
              <label className="input_label" htmlFor="postal_field">
                Postal Code
              </label>
              <input
                placeholder="Postal"
                type="text"
                className="input_field"
                id="postal_field"
              />
            </div>
            <div className="input_container2 col-6">
              <label className="input_label" htmlFor="country">
                country
              </label>
              <input
                placeholder="country"
                type="text"
                className="input_field"
                id="country"
              />
            </div>
          </div>
          <button type="submit" className="sign-in_btn">
            <span>Sign Up</span>
          </button>
          <div className="separators">
            <span>Already have an account? <Link to="/login">Login</Link></span>
          </div>
          <p className="note">By signing up, you agree to our Terms of Service and Privacy Policy</p>
        </form>
      </div>
    </>
  )
}

export default Advertisersign