import React, { Component } from 'react';
import './RecsList.css';
import { Rec } from '../Rec/Rec.js';

const APIURL = 'http://localhost:5000'

export class RecsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="RecsList">
        <h2>Recommendations</h2>
        <div className="card">
          {this.props.recs.map(rec => {
            return <Rec
              key={rec._id}
              id={rec._id}
              location={rec.location}
              name={rec.name}
              type={rec.type}
              comment={rec.comment}
              launchForm={this.props.launchForm}
                   />
          })}
        </div>

      </div>
    );
  }
}
