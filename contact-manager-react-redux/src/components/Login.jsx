import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [username, setUserName] = useState('');

  const [password, setPassword] = useState('');

  const history = useHistory();

  const loginHandler = async () => {
    const res = await fetch('http://localhost:3001/auth/v1', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { token } = await res.json();
    if (token) {
      localStorage.setItem('token', token);
      history.push('/');
    }
    // localStorage.setItem('token', token);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col md-4">
          <div className="form-group">
            <label>Enter Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Enter Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            data-testid="btnSubmit"
            onClick={() => {
              loginHandler();
            }}
            className="btn btn-danger"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
