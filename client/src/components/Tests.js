import React, { Component } from 'react';

export default class Tests2 extends Component {

  state = {
    tests: new Map()
  }

  render() {
    const { tests, summary, message } = this.props;
    return (
      <div style={{ width: '100%', height: '500px', borderBottom: '1px solid lightgrey', overflow: 'hidden', overflowY: 'scroll', fontFamily: 'monospace', fontSize: '1.2rem' }}>
        {/** This is a temporary, hacky solution to keep the grid cell at max size */}
        <div style={{ visibility: 'hidden', height: 0 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        <div style={{ padding: '10px 25px' }}>
          {summary ? <p>Tests: {summary.tests}<br /><span style={{ color: /^0/.test(summary.passed) ? 'grey' : 'green' }}>Passed: {summary.passed}</span><br /><span style={{ color: /^0/.test(summary.failed) ? 'grey' : 'red' }}>Failed: {summary.failed}</span></p> : ''}
          {message ? <p style={{ color: /error/i.test(message) ? 'red' : 'black' }}>{message}</p> : ''}
        </div>
        <ul>
          {tests ? tests.map((el, i) => {
            return (
              <li style={{ color: el[1] ? 'green' : 'red' }} key={i} dangerouslySetInnerHTML={{ __html: el[0] }} />
            )
          }) : ''}
        </ul>
      </div>
    )
  }
}
