import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div style={{
        background: '#222', color: 'white'
      }}>
        <div className="container">
          <div className="flex-footer" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <p style={{ margin: 0, padding: '10px 0' }}>&copy; {Date(Date.now()).split(' ')[3]} Bret Cameron</p>
            </div>
            <div>
              <div style={{
                display: 'inline-block',
                marginLeft: '30px',
                fontSize: '0.95rem'
              }}>
                <Link to="/">
                  About Us
              </Link>
              </div>
              <div style={{
                display: 'inline-block',
                marginLeft: '30px',
                fontSize: '0.95rem'
              }}>
                <Link to="/">
                  Contact
              </Link>
              </div>
              <div style={{
                display: 'inline-block',
                marginLeft: '30px',
                fontSize: '0.95rem'
              }}>
                <Link to="/">
                  Privacy Policy
              </Link>
              </div>
              <div style={{
                display: 'inline-block',
                marginLeft: '30px',
                fontSize: '0.95rem'
              }}>
                <Link to="/">
                  Terms and Conditions
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
