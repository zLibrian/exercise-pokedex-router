import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    const { onClick, pokemonsLength, text, buttonClass } = this.props;
    return (
      <button
        type='button'
        onClick={ onClick }
        disabled={ pokemonsLength < 2 }
        className={ buttonClass }
      >
        { text }
      </button>
    );
  }
}

export default Button;
