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
    const { pass } = this.props;
    return (
      <div>
        <div style={{ height: '100%' }}>
          {/* <h2>Solution</h2> */}
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
              border: '2px solid lightgrey',
              fontSize: `1rem`,
              boxSizing: 'border-box'
            }}
            value={this.props.solution}
            wrapEnabled={true}
          >
          </AceEditor>
          <button className={pass ? "mainButton grn" : "mainButton"} type="button" onClick={this.props.run}>{pass ? 'Submit Code' : 'Run Solution'}</button>
          <button className="secondaryButton" type="button" onClick={this.reset}>Reset</button>
          <p style={{
            fontFamily: 'monospace', fontSize: '1.2rem', color:
              this.props.errorMessage ? 'red' : 'black'
          }}>{this.props.result ? this.props.result : ''}</p>
        </div >
      </div >
    )
  }
}
