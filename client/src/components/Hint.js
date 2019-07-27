import React, { Component } from 'react'

export default class Hint extends Component {
  state = {
    open: false,
  }

  openHint = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { hint } = this.props;
    return (
      <div style={{
        border: '1px solid grey',
        borderRadius: '5px',
        background: '#EEE',
        cursor: 'pointer',
        display: hint ? 'block' : 'none',
        marginBottom: '10px'
      }} onClick={this.openHint}>
        <div style={{ padding: '8px 12px' }}>
          Hint
        </div>
        <div style={{
          display: this.state.open ? 'block' : 'none',
          borderTop: '1px solid grey',
          background: 'white',
          borderRadius: '0 0 5px 5px'
        }}>
          <div style={{ padding: '8px 12px 12px 12px' }} dangerouslySetInnerHTML={{ __html: hint }} />
        </div>
      </div>
    )
  }
}
