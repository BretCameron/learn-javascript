import React, { Component } from 'react';
import axios from 'axios';

import CourseCard from '../components/CourseCard';

export default class CoursesPage extends Component {
  state = {
    data: [],
    search: ''
  }

  componentDidMount = () => {
    axios.get('lessons/courses')
      .then(res => {
        this.setState({ data: res.data })
      })
      .catch(err => console.log(err))
  }

  handleSearch = (e) => {
    this.setState({ search: e.currentTarget.value })
  }

  getCourses = () => {
    const { data, search } = this.state;
    const regex = new RegExp(search, 'i');
    return data.map((el, i) => {
      return <CourseCard key={i} name={el.name} style={{
        display: regex.test(el.name) ? 'inline-block' : 'none'
      }}
      />
    })
  }

  render() {
    return (
      <div style={{ width: '100%', padding: '40px 0' }}>
        <div className="container">
          <div className="title-with-search">
            <h1>Choose a course</h1>
            <input type="text" id="course-search" onChange={this.handleSearch} placeholder="Search" className="course-search" />
          </div>
          <div className="course-cards">
            {this.getCourses()}
          </div>
        </div>
      </div>
    )
  }
}
