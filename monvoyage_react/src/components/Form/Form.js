import React, { Component } from 'react';
import './Form.css';

const APIURL = 'http://localhost:5000'

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: this.props.data.title,
      locationValue: this.props.data.location,
      contentValue: this.props.data.content,
      urlValue: this.props.data.url,
      descriptionValue: this.props.data.description,
      typeValue: this.props.data.type,
      nameValue: this.props.data.name,
      commentValue: this.props.data.comment
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  handleClose(e) {
    this.props.closeForm();
    e.preventDefault();
  }

  handleTitleChange(e) {
    this.setState({
      titleValue: e.target.value
    });
  }

  handleLocationChange(e) {
    this.setState({
      locationValue: e.target.value
    });
  }

  handleContentChange(e) {
    this.setState({
      contentValue: e.target.value
    });
  }

  handleUrlChange(e) {
    this.setState({
      urlValue: e.target.value
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      descriptionValue: e.target.value
    });
  }

  handleTypeChange(e) {
    this.setState({
      typeValue: e.target.value
    });
  }

  handleNameChange(e) {
    this.setState({
      nameValue: e.target.value
    });
  }

  handleCommentChange(e) {
    this.setState({
      commentValue: e.target.value
    });
  }

  render() {
    let postRoute;
    let photoRoute;
    let recRoute;

    let opt;
    if (this.props.formStatus === 'new') {
      postRoute = `${APIURL}/api/posts/`;
      photoRoute = `${APIURL}/api/photos/`;
      recRoute = `${APIURL}/api/recs/`;
      opt = 'New'
    }
    else if (this.props.formStatus === 'edit') {
      postRoute = `${APIURL}/api/posts/${this.props.data.id}?_method=PUT`
      photoRoute = `${APIURL}/api/photos/${this.props.data.id}?_method=PUT`;
      recRoute = `${APIURL}/api/recs/${this.props.data.id}?_method=PUT`;
      opt = 'Edit'
    }

    const postForm =
    <div className="form-popup" id="newPost">
      <form action={postRoute} method="post" className="form-container">

        <h2>{opt} Blog Post</h2>
        <div className="formArea formtitle">
          <label htmlFor="title"><b>Title</b></label>
          <input type="text" placeholder="Blog Post Title" value={this.state.titleValue} onChange={this.handleTitleChange} name="title" required />

        </div>
        <div className="formArea formlocation">
          <label htmlFor="location"><b>Location</b></label>
          <input type="text" placeholder="Location" value={this.state.locationValue} onChange={this.handleLocationChange} name="location" required />
        </div>
        <div className="formArea postcontent">
          <label htmlFor="bodyText"><b>Post Content</b></label>
          <textarea placeholder="Your post here" value={this.state.contentValue} onChange={this.handleContentChange} name="bodyText" />
        </div>
        <div className="formArea formsubmit">
          <button type="submit" className="btn" onSubmit={this.handleClose} >Post</button>
          <button type="submit" className="btn cancel" onClick={this.handleClose}>Close</button>
        </div>

      </form>
    </div>

    const photoForm =
    <div className="form-popup" id="newPhoto">
      <form action={photoRoute} method="post" className="form-container">
        <h2>Upload Photo</h2>
        <div className="formArea formphoto">
          <label htmlFor="url"><b>Link to Photo</b></label>
          <input type="text" placeholder="Paste photo URL here" value={this.state.urlValue} onChange={this.handleUrlChange} name="url" required />

        </div>
        <div className="formArea formlocation">
          <label htmlFor="location"><b>Location</b></label>
          <input type="text" placeholder="Location" value={this.state.locationValue} onChange={this.handleLocationChange} name="location" required />
        </div>
        <div className="formArea postdescription">
          <label htmlFor="description"><b>Description</b></label>
          <textarea placeholder="Enter a short description for your photo" value={this.state.descriptionValue} onChange={this.handleDescriptionChange} name="description"  />
        </div>
        <div className="formArea formsubmit">
          <button type="submit" className="btn" onSubmit={this.handleClose} >Upload</button>
          <button type="submit" className="btn cancel" onClick={this.handleClose}>Close</button>
        </div>
      </form>
    </div>

    const recForm =
    <div className="form-popup" id="newRec">
      <form action={recRoute} method="post" className="form-container">
        <h2>Add a New Recommendation</h2>

        <div className="formArea formrec">
          <label htmlFor="name"><b>Name of Recommendation</b></label>
          <input type="text" placeholder="Enter a restaurant, attraction, or hotel here" value={this.state.nameValue} onChange={this.handleNameChange} name="name" required />

        </div>
        <div className="formArea formlocation">
          <label htmlFor="location"><b>Location</b></label>
          <input type="text" placeholder="Location" value={this.state.locationValue} onChange={this.handleLocationChange} name="location" required />
        </div>
        <div className="formArea formtype">
          <label htmlFor="location"><b>Recommendation Type</b></label>
          <input type="text" placeholder="e.g. Restaurant, Hotel, etc." value={this.state.typeValue} onChange={this.handleTypeChange} name="type" required />
        </div>
        <div className="formArea formcomment">
          <label htmlFor="comment"><b>Comment</b></label>
          <textarea placeholder="Enter a short description for your photo" value={this.state.commentValue} onChange={this.handleCommentChange} name="comment"  />
        </div>
        <div className="formArea formsubmit">
          <button type="submit" className="btn" onSubmit={this.handleClose} >Post</button>
          <button type="submit" className="btn cancel" onClick={this.handleClose}>Close</button>
        </div>

      </form>
    </div>



    return (
      <div className="Form">
        {this.props.type === 'Post' ? (
          postForm
        ) : this.props.type === 'Photo' ? (
          photoForm
        ) : this.props.type === 'Rec' ? (
          recForm
        ) : <p>An error occurred</p>}
      </div>
    );
  }
}
