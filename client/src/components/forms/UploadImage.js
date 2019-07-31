import React, { Component } from 'react';
import axios from 'axios';

export default class UploadImage extends Component {
  state = {
    file: {},
    _id: '',
    buffer: false
  }

  getImage = () => {
    axios.get(`/images/${this.state._id}`)
      .then(res => {
        console.log(res);
        this.setState({ buffer: Buffer(res.data.file.data).toString('base64') })
      });
  }

  setFile = (e) => {
    e.preventDefault();
    console.log(e.target.files)
    if (/.jpeg|.jpg|.png$/.test(e.target.files[0].name)) {
      const newState = this.state;
      const uploadedFile = e.target.files[0];
      newState.file = uploadedFile;
      this.setState(newState);

      const data = new FormData();
      data.append('file', uploadedFile);
      axios.post('/images/upload', data)
        .then(item => this.setState({ _id: item.data._id }, () => {
          this.getImage();
        }))
        .catch(err => console.log(err))
    }
  }

  render() {
    const { buffer } = this.state;
    return (
      <div style={{ width: 188 * 2 + 'px' }}>
        {buffer ? 
        <img width={188 * 2} height={125 * 2} style={{ objectFit: 'cover' }} src={`data:image/png;base64,${buffer}`} alt="" /> 
        :
        <img width={188 * 2} height={125 * 2} src={require('../../images/placeholder.svg')} />
        }
        <form method="POST">
          <input id="file" name="file" type="file" onChange={this.setFile} />
        </form>
      </div>
    )
  }
}
