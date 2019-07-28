import React, { Component } from 'react'

export default class CourseCard extends Component {
  render() {
    const { name, 
      // difficulty, 
      // summary, 
      tags, 
      style } = this.props;
    return (
      <div className="card" style={style}>
        <div>
          <div>
            <img width="100%" style={{ height: '50%' }} src="https://images.unsplash.com/photo-1564299046452-588e3a6284e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" alt="" />
            <h3 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>{name}</h3>
            {tags.map(el => {
              return (
                el ? <em style={{ fontSize: '0.95rem', background: 'grey', margin: '0 2px', color: '#fff', padding: '1px 3px', textTransform: 'lowercase' }}>{el}</em> : null
              )
            })}
            {/* <em style={{ fontSize: '0.95rem', textTransform: 'capitalize' }}>&middot; {difficulty} &middot;</em> */}
            {/* <p>{summary}</p> */}
          </div>
        </div>
      </div >
    )
  }
}
