import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import CourseCard from '../components/CourseCard';
import { getCourseById, getCourses } from '../actions/courseActions';
import SeeAllCourses from '../components/links/SeeAllCourses';
import EditCourse from '../components/links/EditCourse';
import AddLesson from '../components/links/AddLesson';

class CoursePage extends Component {
  state = {
    source: ''
  }

  componentDidMount = () => {
    const { courses } = this.props.course;
    const { courseId } = this.props.match.params;
    this.props.getCourseById(courseId, courses);
  }

  componentWillReceiveProps(nextProps) {
    const { source } = this.state;
    const { image_name } = nextProps.course.course;
    if (!source && image_name) {
      axios.get(`/course-images/${image_name}`)
        .then(res => {
          localStorage.setItem(image_name, res.config.url);
          this.setState({ source: res.config.url })
        })
    }
  }

  handleClick = (courseId) => {
    this.props.getCourseById(courseId);
  }

  render() {
    const { courseId } = this.props.match.params;
    const { name, summary, description, difficulty, tags, category } = this.props.course.course;
    const { source } = this.state;
    return (
      <div style={{ width: '100%', padding: '0' }}>
        <div className="courses-hero" style={{
          height: '20vh',
          background: 'darkgrey',
          backgroundImage: `url(${source})`,
          backgroundSize: 'cover',
          backgroundPosition: '100% 33%'
        }} />

        <div className="container">

          <br /><br />
          <SeeAllCourses />
          <EditCourse courseId={courseId} />
          <AddLesson />

          <h1 style={{ paddingBottom: '0px', marginBottom: '0px' }}>{name}</h1>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr' }}>
            <div>
              <h2 style={{ fontWeight: '100', fontSize: '1.4rem', paddingBottom: '10px' }}>{summary}</h2>
              <hr style={{ width: '30px', margin: '0', border: 'none', borderTop: '1px solid darkgrey' }} />
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
            <div style={{ marginLeft: '50px', justifySelf: 'center' }}>
              <CourseCard name={name} difficulty={difficulty} summary={summary} tags={tags} source={source} category={category} />
              <button type="button" style={{
                display: 'block',
                width: '188px',
                border: '1px solid lightgrey',
                textTransform: 'uppercase',
                height: '2rem',
                background: '#eee',
                cursor: 'pointer'
              }}>
                Enter Course
              </button>
            </div>
          </div>
          <br />
          <button type="button" style={{
            cursor: 'pointer',
            border: 'none',
            color: 'white',
            borderRadius: '5px',
            background: 'linear-gradient(30deg, #053A70, #3398FF)',
            fontSize: '1rem',
            minHeight: '2.8rem',
            width: '100%',
            maxWidth: '500px',
            fontWeight: '100',
            textTransform: 'uppercase'
          }}>Start Course</button>
        </div>
        <br /><br /><br /><br />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  course: state.course,
  courses: state.courses
});

export default connect(mapStateToProps, { getCourseById, getCourses })(CoursePage);