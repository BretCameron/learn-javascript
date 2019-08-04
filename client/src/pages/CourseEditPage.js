import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCourseById } from '../actions/courseActions';
import SeeAllCourses from '../components/links/SeeAllCourses';
import GoBackToCourse from '../components/links/GoBackToCourse';
import CourseForm from '../components/forms/CourseForm';

class CourseCreatePage extends Component {
  state = {
    courseName: ''
  }

  updateCourseName = (courseName) => {
    this.setState({ courseName });
  }

  componentDidMount = () => {
    const { courseId } = this.props.match.params;
    this.props.getCourseById(courseId);
  }

  render() {
    const { name, summary, description, tags, difficulty } = this.props.course.course;
    const { courseId } = this.props.match.params;
    const { courseName } = this.state;
    return (
      <div style={{ width: '100%', padding: '40px 0' }}>
        <div className="container">
          <SeeAllCourses />
          <GoBackToCourse
          courseId={courseId}
          />
          {/* <h1>Edit Course: {courseName || name}</h1> */}
          <br />
          <CourseForm
            courseId={courseId}
            name={courseName || name}
            summary={summary}
            description={description}
            tags={tags}
            difficulty={difficulty}
            updateCourseName={this.updateCourseName}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  course: state.course
});

export default connect(mapStateToProps, { getCourseById })(CourseCreatePage);