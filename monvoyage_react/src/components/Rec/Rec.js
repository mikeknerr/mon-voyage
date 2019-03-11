import React, { Component } from 'react';
import './Rec.css';

const APIURL = 'http://localhost:5000'

export class Rec extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.name = this.props.name;
    this.location = this.props.location;
    this.type = this.props.type;
    this.comment = this.props.comment
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    let postData = {
      id: this.id,
      name: this.name,
      location: this.location,
      type: this.type,
      comment: this.comment
    }
    this.props.launchForm("Rec", postData);
    e.preventDefault();
  }
  render() {
    return (
      <div className="Rec">
        <h3>{this.name}</h3>
        <div className="subhead">
          <h4>{this.location}</h4>
          <h4>Type: {this.type}</h4>
        </div>
        <p>{this.comment}</p>
        <button className="btn open-form edit-post" onClick={this.handleEdit}>Edit</button>

      </div>
    );
  }
}
