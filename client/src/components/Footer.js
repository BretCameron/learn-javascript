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
              <Link to="/">
                <div style={{
                  display: 'inline-block',
                  marginLeft: '30px',
                  fontSize: '0.95rem'
                }}>Privacy Policy</div>
              </Link>
              <Link to="/">
                <div style={{
                  display: 'inline-block',
                  marginLeft: '30px',
                  fontSize: '0.95rem'
                }}>Terms and Conditions</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
