import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div style={{
        background: '#222', color: 'white'
      }}>
        <div className="container">
          < p style={{ margin: 0, padding: '10px 0' }}>&copy; {Date(Date.now()).split(' ')[3]} Bret Cameron</p>
        </div >
      </div >
    )
  }
}
