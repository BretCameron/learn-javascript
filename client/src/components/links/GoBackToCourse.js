import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SeeAllCourses extends Component {
  render() {
    return (
       <div style={{display: 'inline-block', marginRight: '20px'}}>
       <Link to={`/courses/${this.props.courseId}`}>
          <div style={{ fontStyle: 'italic', margin: '0 0 30px 0', display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="darkcyan" d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z"/></svg>
            <span style={{ display: 'inline-block', paddingLeft: '5px' }}>Go Back to Course</span>
          </div>
        </Link>
      </div>
    )
  }
}
