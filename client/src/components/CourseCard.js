import React, { Component } from 'react'

export default class CourseCard extends Component {
  render() {
    const { name, style } = this.props;
    return (
      <div className="card" style={style}>
        <div>
          <h3>{name}</h3>
        </div>
      </div >
    )
  }
}
