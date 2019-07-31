import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateNewCourse extends Component {
  render() {
    const { courseId } = this.props;
    return (
      <div style={{display: 'inline-block', marginRight: '20px'}}>
        <Link to={`/courses/edit/${courseId}`}>
          <div style={{ fontStyle: 'italic', margin: '0 0 30px 0', display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="darkcyan" d="M1.438 16.875l5.688 5.689-7.126 1.436 1.438-7.125zm22.562-11.186l-15.46 15.46-5.688-5.689 15.459-15.46 5.689 5.689zm-4.839-2.017l-.849-.849-12.614 12.599.85.849 12.613-12.599z" /></svg>
            <span style={{ display: 'inline-block', paddingLeft: '5px' }}>Edit Course</span>
          </div>
        </Link>
      </div>
    )
  }
}
