import React, { Component } from 'react'
import isEmail from 'validator/lib/isEmail';

export default class SignUpPage extends Component {
  state = {
    showPassword: false,
    firstName: '',
    lastName: '',
    email: '',
    isEmail: false,
    password: '',
    confirmPassword: '',
    passwordValid: false,
    newsletter: true,
  }

  toggleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  updateInput = (e) => {
    const {password, newsletter} = this.state;
    switch(e.currentTarget.id) {
      case 'confirmPassword':
        password === e.currentTarget.value && e.currentTarget.value.length >= 8 ? this.setState({passwordValid: true}) : this.setState({passwordValid: false});
          this.setState({ [e.currentTarget.id]: e.currentTarget.value });
        break;
        case 'email':
          isEmail(e.currentTarget.value) ? this.setState({isEmail: true}) : this.setState({isEmail: false});
          this.setState({ [e.currentTarget.id]: e.currentTarget.value });
          break;
          case 'newsletter':
            this.setState({ [e.currentTarget.id]: !newsletter });
          break;
        default:
          this.setState({ [e.currentTarget.id]: e.currentTarget.value });
          break;
    }    
  }

  render() {
    const { showPassword, password, confirmPassword, newsletter } = this.state;
    return (
      <div style={{ width: '100%', padding: '40px 0' }}>
        <div className="container">
          <h1>Sign Up</h1>
          <form type="POST">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '215px 200px 15px',
              gridGap: '30px 20px'
            }}>
              <div>
                <label htmlFor="first-name">First Name</label>
                <input onChange={this.updateInput} id="firstName" name="first-name" type="text" />
              </div>
              <div style={{ gridColumn: '2 / 4', width: '100%' }}>
                <label htmlFor="last-name">Last Name</label>
                <input onChange={this.updateInput} id="lastName" name="last-name" type="text" />
              </div>
              <div style={{ gridColumn: '1 / 4', width: '100%' }}>
                <label htmlFor="email">Email Address</label>
                <input onChange={this.updateInput} id="email" name="email" type="email" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input onChange={this.updateInput} id="password" name="password" type={showPassword ? "text" : "password"} />
              </div>
              <div>
                <label htmlFor="password">Confirm Password</label>
                <input onChange={this.updateInput} id="confirmPassword" name="password" type={showPassword ? "text" : "password"} className={password === confirmPassword && confirmPassword !== '' ? 'passwords-match' : ''} />
              </div>
              <div onClick={this.toggleShowPassword} style={{ alignSelf: 'end', paddingBottom: '8px', cursor: 'pointer' }}>
                <svg style={{ display: !showPassword ? 'block' : 'none' }} fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="https://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M10.58,7.25l1.56,1.56c1.38,0.07,2.47,1.17,2.54,2.54l1.56,1.56C16.4,12.47,16.5,12,16.5,11.5C16.5,9.02,14.48,7,12,7 C11.5,7,11.03,7.1,10.58,7.25z"></path><path d="M12,6c3.79,0,7.17,2.13,8.82,5.5c-0.64,1.32-1.56,2.44-2.66,3.33l1.42,1.42c1.51-1.26,2.7-2.89,3.43-4.74 C21.27,7.11,17,4,12,4c-1.4,0-2.73,0.25-3.98,0.7L9.63,6.3C10.4,6.12,11.19,6,12,6z"></path><path d="M16.43,15.93l-1.25-1.25l-1.27-1.27l-3.82-3.82L8.82,8.32L7.57,7.07L6.09,5.59L3.31,2.81L1.89,4.22l2.53,2.53 C2.92,8.02,1.73,9.64,1,11.5C2.73,15.89,7,19,12,19c1.4,0,2.73-0.25,3.98-0.7l4.3,4.3l1.41-1.41l-3.78-3.78L16.43,15.93z M11.86,14.19c-1.38-0.07-2.47-1.17-2.54-2.54L11.86,14.19z M12,17c-3.79,0-7.17-2.13-8.82-5.5c0.64-1.32,1.56-2.44,2.66-3.33 l1.91,1.91C7.6,10.53,7.5,11,7.5,11.5c0,2.48,2.02,4.5,4.5,4.5c0.5,0,0.97-0.1,1.42-0.25l0.95,0.95C13.6,16.88,12.81,17,12,17z"></path></svg>
                <svg style={{ display: showPassword ? 'block' : 'none' }} fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="https://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12,7c-2.48,0-4.5,2.02-4.5,4.5S9.52,16,12,16s4.5-2.02,4.5-4.5S14.48,7,12,7z M12,14.2c-1.49,0-2.7-1.21-2.7-2.7 c0-1.49,1.21-2.7,2.7-2.7s2.7,1.21,2.7,2.7C14.7,12.99,13.49,14.2,12,14.2z"></path><path d="M12,4C7,4,2.73,7.11,1,11.5C2.73,15.89,7,19,12,19s9.27-3.11,11-7.5C21.27,7.11,17,4,12,4z M12,17 c-3.79,0-7.17-2.13-8.82-5.5C4.83,8.13,8.21,6,12,6s7.17,2.13,8.82,5.5C19.17,14.87,15.79,17,12,17z"></path><path fill="none" d="M0,0h24v24H0V0z"></path></svg>
              </div>
              <div style={{ fontSize: '0.9rem', gridColumn: '1 / 4', width: '100%', margin: '-20px 0 20px 0', fontStyle: 'italic' }}>
                Use 8 or more characters with a mix of letters, numbers &amp; symbols.
                </div>
            <div style={{ fontSize: '0.9rem', gridColumn: '1 / 4', width: '100%', margin: '-20px 0 20px 0' }}>
              <input onChange={this.updateInput} style={{display: 'inline-block', width: '20px', height: '20px', margin: '0 10px 0 0', cursor: 'pointer'}} type="checkbox" id="newsletter" name="newsletter" value="newsletter" checked={newsletter} />
              <div style={{display: 'inline-block', transform: 'translateY(-5px)'}}>Be the first to hear about new courses.</div>
            </div>
            </div>
            <div>
              <button className="mainButton" type="button">Sign Up</button>
              </div>
          </form>
        </div>
      </div>
    )
  }
}
