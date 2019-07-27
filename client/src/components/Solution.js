import React, { Component } from 'react'
// eslint-disable-next-line
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

export default class Solution extends Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
  }

  componentDidMount() {
    this.props.updateSolution(this.props.initialSolution);
    this.editorRef.current.editor.focus()
  }

  reset = () => {
    this.props.updateSolution(this.props.initialSolution);
  }

  onChange = e => {
    this.props.updateSolution(e);
  }

  render() {
    return (
      <div>
        <div style={{ height: '100%' }}>
          <h2>Solution</h2>
          <AceEditor
            ref={this.editorRef}
            mode="java"
            theme="github"
            onChange={this.onChange}
            name={this.props.id}
            editorProps={{ $blockScrolling: true }}
            style={{
              width: '100%',
              maxWidth: '700px',
              border: this.props.testResults.length > 0 && !this.props.testResults.includes(false) ? '2px solid green' : '2px solid lightgrey',
              fontSize: `1rem`,
              boxSizing: 'border-box'
            }}
            value={this.props.solution}
          >
          </AceEditor>
          <button className="mainButton" type="button" onClick={this.props.run}>Run Code</button>
          <button className="secondaryButton" type="button" onClick={this.reset}>Reset</button>
          <p style={{
            fontFamily: 'monospace', fontSize: '1.2rem', color:
              this.props.errorMessage ? 'red' : 'black'
          }}>{this.props.errorMessage ? 'Error message: ' + this.props.errorMessage : ''}</p>
        </div >
      </div >
    )
  }
}
