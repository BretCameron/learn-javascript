import React, { Component } from 'react'

export default class SignUpPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', padding: '40px 0' }}>
        <div className="container">
          <h1>Sign Up</h1>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '200px 200px 15px',
            gridGap: '30px 20px'
          }}>
            <div>
              <label for="first-name">First Name</label>
              <input name="first-name" type="text" />
            </div>
            <div style={{ gridColumn: '2 / 4', width: '100%' }}>
              <label for="last-name">Last Name</label>
              <input name="last-name" type="text" />
            </div>
            <div style={{ gridColumn: '1 / 4', width: '100%' }}>
              <label for="email">Email Address</label>
              <input name="email" type="email" />
            </div>
            <div>
              <label for="password">Password</label>
              <input name="password" type="password" />
            </div>
            <div>
              <label for="password">Confirm Password</label>
              <input name="password" type="password" />
            </div>
            <div style={{ alignSelf: 'end', paddingBottom: '8px' }}>
              <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="https://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M10.58,7.25l1.56,1.56c1.38,0.07,2.47,1.17,2.54,2.54l1.56,1.56C16.4,12.47,16.5,12,16.5,11.5C16.5,9.02,14.48,7,12,7 C11.5,7,11.03,7.1,10.58,7.25z"></path><path d="M12,6c3.79,0,7.17,2.13,8.82,5.5c-0.64,1.32-1.56,2.44-2.66,3.33l1.42,1.42c1.51-1.26,2.7-2.89,3.43-4.74 C21.27,7.11,17,4,12,4c-1.4,0-2.73,0.25-3.98,0.7L9.63,6.3C10.4,6.12,11.19,6,12,6z"></path><path d="M16.43,15.93l-1.25-1.25l-1.27-1.27l-3.82-3.82L8.82,8.32L7.57,7.07L6.09,5.59L3.31,2.81L1.89,4.22l2.53,2.53 C2.92,8.02,1.73,9.64,1,11.5C2.73,15.89,7,19,12,19c1.4,0,2.73-0.25,3.98-0.7l4.3,4.3l1.41-1.41l-3.78-3.78L16.43,15.93z M11.86,14.19c-1.38-0.07-2.47-1.17-2.54-2.54L11.86,14.19z M12,17c-3.79,0-7.17-2.13-8.82-5.5c0.64-1.32,1.56-2.44,2.66-3.33 l1.91,1.91C7.6,10.53,7.5,11,7.5,11.5c0,2.48,2.02,4.5,4.5,4.5c0.5,0,0.97-0.1,1.42-0.25l0.95,0.95C13.6,16.88,12.81,17,12,17z"></path></svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
