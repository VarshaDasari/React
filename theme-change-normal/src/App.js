import React, { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';

function App() {
  const light = 1;
  const dark = 0;

  const [theme, setTheme] = useState(light);

  return (
    <div>
      <div style={{ padding: '2em' }}>
        {theme && (
          <button
            onClick={() => {
              setTheme(!theme);
            }}
            type="button"
            className="btn btn-primary"
          >
            Light
          </button>
        )}
        {!theme && (
          <button
            onClick={() => {
              setTheme(!theme);
            }}
            type="button"
            className="btn btn-secondary"
          >
            Dark
          </button>
        )}
      </div>
      <CardContainer theme={theme} />
    </div>
  );
}

export default App;
