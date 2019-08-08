import React, { Component } from 'react';

export default class Tests2 extends Component {

  state = {
    tests: new Map()
  }

  render() {
    const { tests, summary } = this.props;
    return (
      <div style={{ height: '400px', overflow: 'hidden', overflowY: 'scroll', fontFamily: 'monospace', fontSize: '1.1rem' }}>
        {/** This is a temporary, hacky solution to keep the grid cell at max size */}
        <div style={{ visibility: 'hidden', height: 0 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        <p>Tests: {summary.tests}<br /><span style={{color: /^0/.test(summary.passed) ? 'grey': 'green'}}>Passed: {summary.passed}</span><br /><span style={{color: /^0/.test(summary.failed) ? 'grey': 'red'}}>Failed: {summary.failed}</span></p>
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