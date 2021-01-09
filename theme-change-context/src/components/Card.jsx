import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

export default function Card() {
  const theme = useContext(ThemeContext);

  return (
    <div style={theme} className="card">
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
