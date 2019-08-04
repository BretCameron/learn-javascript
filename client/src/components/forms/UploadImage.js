import React, { Component } from 'react';
import axios from 'axios';

export default class UploadImage extends Component {
  state = {
    file: {},
    _id: '',
    source: null,
    width: 0,
    _mounted: false
  }

  imageRef = React.createRef();

  componentDidMount = () => {
    this.setState({
      _mounted: true,
      width: this.imageRef.current.getBoundingClientRect().width
    }, () => {
      const { image_name } = this.props;

      if (image_name && this.state._mounted) {
        axios.get(`/course-images/${image_name}`)
          .then(res => {
            localStorage.setItem(image_name, res.config.url);
            this.setState({ source: res.config.url })
          })
      }
    });

    window.addEventListener('resize', () => {
      this.setState({ width: this.imageRef.current ? this.imageRef.current.getBoundingClientRect().width : 0 });
    });

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.image_name !== this.props.image_name && typeof nextProps.image_name !== "undefined") {
      const { image_name } = nextProps;
      axios.get(`/course-images/${image_name}`)
        .then(res => {
          localStorage.setItem(image_name, res.config.url);
          this.setState({ source: res.config.url })
        }
        )
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', () => {
      this.setState({ width: 0 });
    });
    this.setState({ _mounted: false })
  }

  getImage = () => {
    const { name } = this.state;
    console.log(name);
    axios.get(`/course-images/${name}`, { responseType: 'arraybuffer' })
      .then(res => {
        const base64 = btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );
        this.setState({ source: "data:;base64," + base64 });
      });
  }

  setFile = (e) => {
    e.preventDefault();
    if (/.jpeg|.jpg|.png$/.test(e.target.files[0].name)) {
      const newState = this.state;
      const uploadedFile = e.target.files[0];
      newState.file = uploadedFile;
      this.setState(newState);

      const data = new FormData();
      data.append('file', uploadedFile);
      axios.post('/images/upload', data)
        .then(item => {
          this.setState({
            _id: item.data._id,
            name: item.data.name
          }, () => {
            this.props.setImageId(item.data._id);
            this.props.setImageName(item.data.name);
            this.getImage();
          })
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    const { source, width } = this.state;
    return (

      <div style={{ width: '100%', overflow: 'hidden' }} >
        <label htmlFor="file" style={{ marginBottom: '0.5rem' }}>Upload Course Image:</label>
        {
          source ?
            <img ref={this.imageRef
            } style={{ width: '100%', height: width * 125 / 188, objectFit: 'cover', border: '1px solid lightgrey', borderRadius: '10px' }} src={source} alt="" />
            :
            <img ref={this.imageRef} style={{ width: '100%', height: width * 125 / 188, objectFit: 'cover', border: '1px solid lightgrey', borderRadius: '10px' }} src={require('../../images/placeholder.svg')} alt="Placeholder" />
        }
        <input id="file" name="file" type="file" onChange={this.setFile} />
      </div >

    )
  }
}
