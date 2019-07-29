import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CourseCard extends Component {
  render() {
    const { name,
      id,
      tags,
      style,
      handleClick
    } = this.props;
    return (
      <div className="card" style={style} onClick={handleClick ? () => handleClick(id) : () => {}}>
        <div>
          <Link to={`/courses/${id}`}>
            <div>
              <img width="100%" style={{ height: '50%' }} src="https://images.unsplash.com/photo-1564299046452-588e3a6284e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" alt="" />
              <h3 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>{name}</h3>
              {tags ? tags.map((el, i) => {
                return (
                  el ? <em key={i} style={{ fontSize: '0.95rem', background: 'grey', margin: '2px', color: '#fff', padding: '1px 3px', textTransform: 'lowercase', display: 'inline-block' }}>{el}</em> : ''
                )
              }) : ''}
              {/* <em style={{ fontSize: '0.95rem', textTransform: 'capitalize' }}>&middot; {difficulty} &middot;</em> */}
              {/* <p>{summary}</p> */}
            </div>
          </Link>
        </div>
      </div >
    )
  }
}
