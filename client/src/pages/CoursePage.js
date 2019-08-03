import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCourseById, getCourses } from '../actions/courseActions';
import SeeAllCourses from '../components/links/SeeAllCourses';
import EditCourse from '../components/links/EditCourse';
import DuplicateCourse from '../components/links/DuplicateCourse';
// import CourseCard from '../components/CourseCard';
import LessonCard from '../components/LessonCard';

class CoursePage extends Component {
  componentDidMount = () => {
    const { courseId } = this.props.match.params;
    this.props.getCourseById(courseId);
    // this.props.getCourses();
  }

  handleClick = (courseId) => {
    this.props.getCourseById(courseId);
  }

  render() {
    const { courseId } = this.props.match.params;
    const { name, summary, description, difficulty, tags } = this.props.course.course;
    // const { course, courses } = this.props.course;
    // let suggestionCount = 0;
    return (
      <div style={{ width: '100%', padding: '40px 0' }}>
        <div className="container">
          <SeeAllCourses />
          <h1>{name}</h1>
          <p style={{ textTransform: 'uppercase' }}>{difficulty}</p>
          <EditCourse courseId={courseId} />
          <DuplicateCourse />
          <h2 style={{ fontWeight: '100', fontSize: '1.2rem' }}>{summary}</h2>


          {tags ? tags.map((el, i) => {
            return (
              el ? <em key={i} style={{ fontSize: '0.95rem', background: 'grey', margin: '0 2px', color: '#fff', padding: '1px 3px', textTransform: 'lowercase' }}>{el}</em> : null
            )
          }) : ''}
          <p>{description}</p>
          <br /><br /><br />
          {[1, 2, 3].map((el, i) => {
            return <LessonCard key={i} number={i} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  course: state.course
});

export default connect(mapStateToProps, { getCourseById, getCourses })(CoursePage);