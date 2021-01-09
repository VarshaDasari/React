import logo from './logo.svg';
import './App.css';
import CardContainer from './components/CardContainer';
import React, { useState } from 'react';
import AppTheme from './AppTheme';
import ThemeContext from './ThemeContext';

function App() {
  const light = 1;
  const dark = 0;

  const [theme, setTheme] = useState(AppTheme.dark);

  const [color, setColor] = useState(light);

  return (
    <div>
      <div style={{ padding: '2em' }}>
        {color && (
          <button
            onClick={() => {
              setTheme(AppTheme.light);
              setColor(!color);
            }}
            type="button"
            className="btn btn-primary"
          >
            Light
          </button>
        )}
        {!color && (
          <button
            onClick={() => {
              setTheme(AppTheme.dark);
              setColor(!color);
            }}
            type="button"
            className="btn btn-secondary"
          >
            Dark
          </button>
        )}
      </div>
      <ThemeContext.Provider value={theme}>
        <CardContainer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
export { ThemeContext };
