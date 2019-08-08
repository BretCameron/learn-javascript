import React, { Component } from 'react';

export default class Tests2 extends Component {

  state = {
    tests: new Map()
  }

  render() {
    const { tests } = this.props;
    return (
      <div style={{ height: '400px', overflow: 'hidden', overflowY: 'scroll', fontFamily: 'monospace', fontSize: '1.1rem' }}>
        {/** This is a temporary, hacky solution to keep the grid cell at max size */}
        <div style={{ visibility: 'hidden', height: 0 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        <ul>
          {tests.map((el, i) => {
            return (
              <li style={{ color: el[1] ? 'green' : 'red' }} key={i} dangerouslySetInnerHTML={{ __html: el[0] }} />
            )
          })}
        </ul>
      </div>
    )
  }
}
