import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState('false');
  const [allValues, setAllValues] = useState({
    name: '',
    lname: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    country: '',
    code: '',
  });

  function textRegex(text) {
    return /^[a-zA-Z]+$/.test(text);
  }

  function numRegex(num) {
    return /[\+]?\d{10}/.test(num);
  }

  function checkIfEmailInString(text) {
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(text);
  }

  function isValidZipCode(zipCode) {
    return /(^\d{6}$)|(^\d{6}-\d{3}$)/.test(zipCode);
  }

  useEffect(() => {
    if (location.state != 'null') {
      setAllValues(location.state);
    }
  }, []);

  const changeHandler = e => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
    setStatus('true');
  }

  const handleClick = () => {
    if (allValues != 'null' && allValues != 'undefined') {
      if (allValues.name && allValues.lname && allValues.phone && allValues.email && allValues.address &&
        allValues.city && allValues.state && allValues.country && allValues.code) {
        if (textRegex(allValues.name) == false) {
          alert('Please fill the first name fields with relevant data...');
        } else if (textRegex(allValues.lname) == false) {
          alert('Please fill the last name fields with relevant data...');
        } else if (checkIfEmailInString(allValues.email) == false) {
          alert('Please fill the email fields with relevant data...');
        } else if (numRegex(allValues.phone) == false) {
          alert('Please fill the phone fields with relevant data...');
        } else if (textRegex(allValues.city) == false) {
          alert('Please fill the city fields with relevant data...');
        } else if (textRegex(allValues.state) == false) {
          alert('Please fill the state fields with relevant data...');
        } else if (textRegex(allValues.country) == false) {
          alert('Please fill the country fields with relevant data...');
        } else if (isValidZipCode(allValues.code) == false) {
          alert('Please fill the code fields with relevant data...');
        } else {
          let allData = JSON.stringify(allValues);
          localStorage.setItem("addContact", allData);
          navigate('/home');
        }
      } else {
        alert('Please fill all data...');
      }
    }
  }

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <>
      <div class="container py-5 w">
        <h1>Contact form</h1>
        <form class="p-md-5 border rounded-3 bg-body-tertiary">
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input type="text" id="form4Example1" name="name" value={allValues?.name} onChange={changeHandler} class="form-control" required />
                <label class="form-label" for="form4Example1">First Name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input type="text" id="form4Example1" name="lname" value={allValues?.lname} class="form-control" onChange={changeHandler} required />
                <label class="form-label" for="form4Example1">Last Name</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input type="email" id="form4Example2" name="email" value={allValues?.email} class="form-control" onChange={changeHandler} required />
                <label class="form-label" for="form4Example2">Email address</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input type="text" id="form4Example1" name="phone" value={allValues?.phone} class="form-control" onChange={changeHandler} required />
                <label class="form-label" for="form4Example1">Phone</label>
              </div>
            </div>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control" id="form4Example3" name="address" value={allValues?.address} rows="4" onChange={changeHandler} required></textarea>
            <label class="form-label" for="form4Example3">Address</label>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input type="text" id="form4Example1" name="city" value={allValues?.city} class="form-control" onChange={changeHandler} required />
                <label class="form-label" for="form4Example1">City</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input type="text" id="form4Example1" name="state" value={allValues?.state} class="form-control" onChange={changeHandler} required />
                <label class="form-label" for="form4Example1">State</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input type="text" id="form4Example1" name="country" value={allValues?.country} class="form-control" onChange={changeHandler} required />
                <label class="form-label" for="form4Example1">Country</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input type="text" id="form4Example1" name="code" value={allValues?.code} class="form-control" onChange={changeHandler} required />
                <label class="form-label" for="form4Example1">Postal Code</label>
              </div>
            </div>
          </div>
          <div class="form-check d-flex justify-content-left mb-3">
            <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" />
            <label class="form-check-label" for="form4Example4">
              I'm not a robot
            </label>
          </div>{
            status === 'true' ?
              <button type="button" class="w-100 btn btn-lg btn-success" onClick={() => handleClick()} >Send</button>
              :
              <button type="button" class="w-100 btn btn-lg btn-success" onClick={() => handleClick()} disabled>Send</button>
          }
        </form>
      </div>

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </>
  )
}

export default Contact;