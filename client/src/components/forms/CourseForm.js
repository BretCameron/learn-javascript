import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createCourse, updateCourse, deleteCourse } from '../../actions/courseActions';
// import SeeAllCourses from '../links/SeeAllCourses';

class CourseForm extends Component {
  state = {
    courseDescription: '',
    courseDifficulty: 'beginner',
    courseName: '',
    courseSummary: '',
    courseTags: [],
    message: ''
  }

  createCourseSubmit = (e) => {
    e.preventDefault();
    const { courseDescription,
      courseDifficulty,
      courseName,
      courseSummary,
      courseTags } = this.state;
    const newCourse = {
      courseDescription,
      courseDifficulty,
      courseName,
      courseSummary,
      courseTags,
    }
    try {
      this.props.createCourse(newCourse);
      this.setState({ message: 'Course created successfully!' })
    } catch (err) {
      this.setState({ message: `There was an error: ${err.message}` })
    }
  }

  updateCourseSubmit = (e) => {
    e.preventDefault();
    const { courseId } = this.props;
    const { courseDescription,
      courseDifficulty,
      courseName,
      courseSummary,
      courseTags } = this.state;
    const updatedCourse = {
      name: courseName,
      summary: courseSummary,
      description: courseDescription,
      difficulty: courseDifficulty,
      tags: courseTags,
    }
    try {
      this.props.updateCourse(courseId, updatedCourse);
      this.setState({ message: 'Course updated successfully!' })
    } catch (err) {
      this.setState({ message: `There was an error: ${err.message}` })
    }
  }

  deleteCourseSubmit = (e) => {
    e.preventDefault();
    const { courseId } = this.props;
    this.props.deleteCourse(courseId);
  }

  updateInput = (e) => {
    switch (e.currentTarget.id) {
      case 'courseTags':
        this.setState({ [e.currentTarget.id]: e.currentTarget.value.split(/[,;]\s?/) });
        break;
      default:
        this.setState({ [e.currentTarget.id]: e.currentTarget.value });
        break;
    }
  }

  render() {
    // const {
    // courseDescription,
    // courseDifficulty,
    // courseName,
    // courseSummary,
    // courseTags
    // } = this.state;
    const {
      name,
      difficulty,
      summary,
      description,
      tags,
      courseId,
      updateCourseName
    } = this.props;
    return (
      <div>
        <form method="POST">
          <div className="course-create-grid">
            <div>
              <label htmlFor="courseName">Course Name*</label>
              <input onChange={(e) => {
                this.updateInput(e);
                if (updateCourseName) updateCourseName(e.currentTarget.value);
              }
              } id="courseName" name="courseName" type="text" defaultValue={name} />
            </div>
            <div>
              <label htmlFor="courseSummary">Short Summary*<em>(60 characters)</em></label>
              <input onChange={this.updateInput} id="courseSummary" name="courseSummary" type="text" defaultValue={summary} />
            </div>
            <div style={{
              gridColumn: '2',
              gridRow: '2 / 4'
            }}>
              <label htmlFor="courseDescription">Description</label>
              <textarea onChange={this.updateInput} id="courseDescription" name="courseDescription" defaultValue={description} />
            </div>
            <div>
              <label htmlFor="courseDifficulty">Course Difficulty*</label>
              <select onChange={this.updateInput} id="courseDifficulty" name="courseDifficulty" defaultValue={difficulty} >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label htmlFor="courseTags">Tags <em>(separate with a comma)</em></label>
              <input onChange={this.updateInput} id="courseTags" name="courseTags" type="text" defaultValue={tags} />
            </div>
            <div>
              <input onClick={courseId ? this.updateCourseSubmit : this.createCourseSubmit} type="submit" value={courseId ? 'Update Course' : 'Create Course'} />
              <br />
              <p style={{ fontSize: '0.95rem', fontStyle: 'italic' }}>
                {this.state.message}</p>
            </div>
            <div style={{ display: courseId ? 'block' : 'none' }}>
              <input type="submit" value="Delete Course" className="warning" onClick={this.deleteCourseSubmit} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  course: state.course
});

export default connect(mapStateToProps, { createCourse, updateCourse, deleteCourse })(CourseForm);