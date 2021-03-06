import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div style={{ background: 'linear-gradient(30deg, #053A70, #3398FF)', color: 'white' }}>
        <div className="container">
          <div className="flex-header" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Link to="/">
              <h1 style={{ display: 'inline-block', fontStyle: 'italic', fontSize: '1.6rem' }}>LearnJavaScript.com</h1>
            </Link>
            <div>
              <div style={{
                display: 'inline-block',
                marginLeft: '30px',
                fontWeight: '200'
              }}>
                <Link to="/">
                  Become a Course Creator
              </Link>
              </div>
              <div style={{
                display: 'inline-block',
                marginLeft: '30px',
                fontWeight: '600'
              }}>
                <Link to="/login">
                  Log In
              </Link>
              </div>
              <Link to="/sign-up">
                <div style={{
                  display: 'inline-block',
                  marginLeft: '30px',
                  fontWeight: '600'
                }}>
                  Sign Up
                  </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
