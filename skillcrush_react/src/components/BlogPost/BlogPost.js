import React, { Component } from 'react';
import './BlogPost.css';

//evaluate need for stateless functional Component
const APIURL = 'http://localhost:5000'

export class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.title = this.props.title;
    this.location = this.props.location;
    this.content = this.props.content;
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    let postData = {
      id: this.id,
      title: this.title,
      location: this.location,
      content: this.content
    }
    this.props.launchForm("Post", postData);
    e.preventDefault();
  }



  render() {
    return (
      <div className="BlogPost">
        <h3>{this.title}</h3>
        <h4>{this.location}</h4>
        <p>{this.content}</p>
        <button className="btn open-form edit-post" onClick={this.handleEdit}>Edit</button>
      </div>

    );
  }
}
