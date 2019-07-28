import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (
      <div>
        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}
