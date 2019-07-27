import React, { Component } from 'react';
// import axios from 'axios';

export default class CoursesPage extends Component {
  updateInput = (e) => {
    switch (e.currentTarget.id) {
      default:
        this.setState({ [e.currentTarget.id]: e.currentTarget.value });
        break;
    }
  }

  render() {
    return (
      <div style={{ width: '100%', padding: '40px 0' }}>
        <div className="container">
          <h1>Create a Course</h1>
          <br />
          <div>
            <label htmlFor="courseName">Course Name</label>
            <input onChange={this.updateInput} id="courseName" name="courseName" type="text" />
          </div>
          <br />
          <div>
            <label htmlFor="courseDifficulty">Course Difficulty</label>
            <select onChange={this.updateInput} id="courseDifficulty" name="courseDifficulty">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}
