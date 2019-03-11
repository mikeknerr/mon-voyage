import React, { Component } from 'react';
import './BlogList.css';
import { BlogPost } from '../BlogPost/BlogPost.js';

//evaluate need for stateless functional Component


export class BlogList extends Component {
  render() {
    return (
      <div className="BlogList">
        <h2>Blog Posts</h2>
        <div className="card">
          {this.props.posts.map(post => {
            return <BlogPost
              key={post._id}
              id={post._id}
              title={post.title}
              location={post.location}
              content={post.bodyText}
              launchForm={this.props.launchForm}
                   />
          })}
        </div>

      </div>


    );
  }
}
