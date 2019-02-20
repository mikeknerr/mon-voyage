import React, { Component } from 'react';
import './Photo.css';

//evaluate need for stateless functional Component


export class Photo extends Component {
  render() {
    return (
      <img className="small-pic" src={this.props.url} alt={this.props.description} />
    );
  }
}
