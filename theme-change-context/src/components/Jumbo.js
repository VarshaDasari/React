import React, { Component } from 'react';
import ThemeContext from '../ThemeContext';

export default class Jumbo extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => (
          <div className="jumbotron border border-success m-3" style={value}>
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <a className="btn btn-primary btn-lg" href role="button">
              Learn more
            </a>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
