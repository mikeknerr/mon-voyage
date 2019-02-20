import React, { Component } from 'react';
import './PhotoGallery.css';
import { Photo } from '../Photo/Photo.js';

const APIURL = 'http://localhost:5000'


export class PhotoGallery extends Component {
  render() {
    return (
      <div className="container" >
        <h2>My Pics</h2>
        <div className="PhotoGallery">
          {this.props.photos.map(photo => {
            return <Photo key={photo._id} url={photo.url} location={photo.location} description={photo.description} />
          })}
        </div>

      </div>

    );
  }
}
