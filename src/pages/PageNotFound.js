import React, { Component } from 'react';

export class PageNotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h2>
          Requested page not found
      <span role="img" aria-label="Crying emoji"> 😭 </span>
        </h2>
        <img
          className="not-found-image"
          src="https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"
          alt="Pikachu crying because the page requested was not found"
        />
      </div>
    );
  }
}

export default PageNotFound;
