import React, { Component } from 'react'

export default class Tests extends Component {

  populateTests = () => {
    const { testCases, testResults } = this.props;
    return testCases.map((el, i) => {
      return (
        <div key={i} style={{
          color: testResults[i] ? 'green' : 'black',
          fill: testResults[i] ? 'green' : 'white',
          stroke: testResults[i] ? 'darkgreen' : 'grey',
          display: 'grid',
          gridTemplateColumns: '20px auto',
          gridGap: '10px',
          alignItems: 'center',
        }}>
          <svg style={{ width: '20px', marginRight: '10px' }} viewBox="-2 -2 13 13" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" />
          </svg>
          {el.description}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <hr style={{
          border: 'none',
          borderTop: '1px dotted grey'
        }} />
        <div style={{ height: '100%' }}>
          <h2>Tests</h2>
          <div>
            {this.populateTests()}
          </div>
        </div>
      </div>
    )
  }
}
