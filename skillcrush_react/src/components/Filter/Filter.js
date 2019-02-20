import React, { Component } from 'react';
import './Filter.css';

//evaluate need for stateless functional Component


export class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let location = e.target.textContent;
    this.props.filterAll(location);
  }
  //Format filter as checkbox?
  //need to pass down as props the ability to filter each of the 3 sections

  render() {
    return (
      <a  onClick={this.handleClick} href="#" >{this.props.location}</a>
    );
  }
}
