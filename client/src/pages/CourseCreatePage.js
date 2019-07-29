import React, { Component } from 'react';

import SeeAllCourses from '../components/links/SeeAllCourses';
import CourseForm from '../components/forms/CourseForm';

export default class CourseCreatePage extends Component {
  render() {
    return (
      <div style={{ width: '100%', padding: '40px 0' }}>
        <div className="container">
          <SeeAllCourses />
          <h1>Create a Course</h1>
          <br />
          <CourseForm  />
        </div>
      </div>
    )
  }
}