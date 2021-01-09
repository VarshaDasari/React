import React from 'react';

const Contact = (props) => {
  const deleteClickHandler = (id) => {
    console.log('Child ID: ', id);
    props.deleteContact(id);
  };

  return (
    <div
      data-testid="card"
      className="card contact-card"
      style={{ width: '18rem' }}
    >
      <div className="card-body">
        <i
          onClick={() => {
            deleteClickHandler(props.id);
          }}
          className="far fa-trash-alt float-right text-danger"
        ></i>
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text card-email">{props.email}</p>
        {/* <p className="card-text">{props.city}</p> */}
        <p className="card-text card-phoneNumber">{props.phoneNumber}</p>
      </div>
    </div>
  );
};

export default Contact;
