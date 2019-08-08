import React, { Component } from 'react'
import Background from '../images/nicole-wolf-CZ9AjMGKIFI-unsplash.jpg'

export default class Hero extends Component {
  render() {
    return (
      <div className="courses-hero" style={{
        height: '40vh',
        background: 'darkgrey',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: '100% 33%'
      }}>
        <div className="container">
          <h1 style={{
            margin: 0,
            padding: '40px 0 0 0',
            fontSize: '3rem',
            color: '#FFF'
          }}>Learn to Code Web Apps</h1>
          <h2 style={{
            marginTop: 0,
            fontWeight: '100',
            fontStyle: 'italic',
            color: '#fff'
          }}>Browse our Free JavaScript Courses</h2>
        </div>
      </div>
    )
  }
}
