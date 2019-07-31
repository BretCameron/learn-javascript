import React, { Component } from 'react';

export default class DeleteModal extends Component {
  state = {
    match: false
  }

  handleChange = (e) => {
    if (!e.isTrusted) return;
    const { name } = this.props;
    const regex = new RegExp(name, 'i');
    this.setState({
      match: regex.test(e.currentTarget.value)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.match) this.props.deleteCourse(e);
  }

  render() {
    const { name } = this.props;
    const { match } = this.state;
    return (
      <div>
        <div className="modal-background">
          <div className="modal">
            <div style={{ textAlign: 'right' }}>
              <button type="button" onClick={this.props.toggleModal} style={{
                fontFamily: 'sans-serif',
                marginRight: '-40px',
                padding: '10px 25px',
                background: 'none',
                border: 'none',
                fontSize: '2rem',
                fontWeight: '100',
                cursor: 'pointer'
              }}>×</button>
            </div>
            <h3>Delete Course</h3>
            <hr />
            <p>To delete <strong>{name}</strong>, type in its name below.</p>
            <form method="DELETE">
              <input onChange={this.handleChange} name="delete" />
              <br /><br />
              <input type="submit" value="Delete Course" className={match ? "warning" : "inactive"} onClick={this.handleSubmit} />
              <br /><br />
            </form>
          </div>
        </div>
      </div >
    )
  }
}
