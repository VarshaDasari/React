import React from 'react';

export default function Card(props) {
  // 1 = true ; 0 = false
  if (!props.theme) {
    return (
      <div
        className="card"
        style={{
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="card"
        style={{
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}
