import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCourses } from '../actions/courseActions';
import CourseCard from '../components/CourseCard';
import Loader from '../components/Loader';

class CoursesBrowsePage extends Component {
  state = {
    data: [],
    search: ''
  }

  componentDidMount = () => {
    this.props.getCourses();
  }

  handleSearch = (e) => {
    this.setState({ search: e.currentTarget.value })
  }

  getCourses = (items) => {
    const { search } = this.state;
    const regex = new RegExp(search, 'i');
    return items.map((el, i) => {
      return <CourseCard key={i} name={el.name} difficulty={el.difficulty} summary={el.summary} tags={el.tags} style={{
        display: regex.test(el.name) ? 'inline-block' : 'none'
      }}
      />
    })
  }

  render() {
    const { courses, loading } = this.props.course;
    return (
      <div style={{ width: '100%', padding: '40px 0' }}>
        <div className="container">
          <div className="title-with-search">
            <h1>Choose a course</h1>
            <input type="text" id="course-search" onChange={this.handleSearch} placeholder="Search" className="course-search" />
          </div>
          <div className="course-cards">
            {loading ? <Loader /> : this.getCourses(courses)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  course: state.course
});

export default connect(mapStateToProps, { getCourses })(CoursesBrowsePage);