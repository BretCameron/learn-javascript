import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SeeAllCourses extends Component {
  render() {
    return (
      <div>
        <Link to="/courses">
          <div style={{ fontStyle: 'italic', margin: '0 0 30px 0', display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="darkcyan" d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z" /></svg>
            <span style={{ display: 'inline-block', paddingLeft: '5px' }}>See All Courses</span>
          </div>
        </Link>
      </div>
    )
  }
}
