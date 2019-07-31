import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CourseCard extends Component {
  render() {
    const { name,
      id,
      tags,
      style,
      handleClick,
      number
    } = this.props;
    return (
      <div className="lesson-card" style={style} onClick={handleClick ? () => handleClick(id) : () => {}}>
        <div>
          <Link to={`/courses/${id}`}>
            <div>
              <h3 style={{ marginBottom: '10px', fontSize: '1.4rem', fontWeight: '100' }}>Lesson {number + 1}</h3>
            </div>
          </Link>
        </div>
      </div >
    )
  }
}
