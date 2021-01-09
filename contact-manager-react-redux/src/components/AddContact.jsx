import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function AddContact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const history = useHistory();

  const getName = (e) => {
    setName(e.target.value);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  // const getPhoneNumber = (e) => {
  //   setPhoneNumber(e.target.value);
  // };

  const submitForm = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      email,
      phoneNumber,
    };
    fetch('http://localhost:3002/persons', {
      method: 'POST',
      body: JSON.stringify(newContact),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div>
      <form className="col-md-6">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            id="contactName"
            onChange={getName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            id="contactEmail"
            onChange={getEmail}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            id="contactPhoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-control"
          />
        </div>
        <button
          data-testid="btnSubmit"
          onClick={submitForm}
          className="btn btn-danger"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
