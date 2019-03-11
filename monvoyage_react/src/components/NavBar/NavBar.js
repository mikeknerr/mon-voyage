import React, { Component } from 'react';
//import { PostType } from '../PostType/PostType.js';
import { Filter } from '../Filter/Filter.js';
import './NavBar.css';

const APIURL = 'http://localhost:5000'

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.launchForm(e.target.textContent);
    e.preventDefault();
  }

  render() {
    return (
      <div className="NavBar">
        <h1 className="site-title">Mon Voyage</h1>
        {/* <div className="Logo">
          <h1 className="site-title">Mon Voyage</h1>
        </div> */}
        <div className="Dropdowns">
          <div className="dropdown filter-dropdown">
            <button className="dropbtn">Filters</button>
            <div className="dropdown-content">
              {this.props.locations.map((location, index) => {

                return <Filter
                  key={index}
                  location={location}
                  filterAll={this.props.filterAll}
                       />
              })}
            </div>
          </div>
          <div className="dropdown compose-dropdown">
            <button className="dropbtn">Compose</button>
            <div className="dropdown-content">
              <a href="" className="open-form new-post" onClick={this.handleClick}>Post</a>
              <a href="" className="open-form new-photo" onClick={this.handleClick}>Photo</a>
              <a href="" className="open-form new-rec" onClick={this.handleClick}>Rec</a>
            </div>
          </div>
        </div>

        {/* need own component for these?
        state management - how to update other components? */}

      </div>
    );
  }
}
