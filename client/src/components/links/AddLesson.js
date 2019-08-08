import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateNewCourse extends Component {
  render() {
    return (
      <div style={{ display: 'inline-block', marginRight: '20px' }}>
        <Link to="/courses/create">
          <div style={{ fontStyle: 'italic', margin: '0 0 30px 0', display: 'flex', alignItems: 'center' }}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path fill="darkcyan" d="M7 2c1.695 1.942 2.371 3 4 3h13v17h-24v-20h7zm6 11v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z" /></svg>
            <span style={{ display: 'inline-block', paddingLeft: '5px' }}>Add Lesson</span>
          </div>
        </Link>
      </div>
    )
  }
}
