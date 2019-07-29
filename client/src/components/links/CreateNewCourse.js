import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateNewCourse extends Component {
  render() {
    return (
      <div>
        <Link to="/courses/create">
          <div style={{ fontStyle: 'italic', margin: '0 0 30px 0', display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="darkcyan" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z" /></svg>
            <span style={{ display: 'inline-block', paddingLeft: '5px' }}>Create New Course</span>
          </div>
        </Link>
      </div>
    )
  }
}
