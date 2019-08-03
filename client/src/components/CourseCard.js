import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class CourseCard extends Component {
  state = {
    buffer: '',
    source: localStorage.getItem(this.props.image_name) || null,
    likes: parseInt(Math.random() * 1000)
  }

  componentDidMount = () => {
    const { image_name } = this.props;
    const { source } = this.state;
    if (!source) {
      axios.get(`/course-images/${image_name}`)
        .then(res => {
          localStorage.setItem(image_name, res.config.url);
          this.setState({ source: res.config.url })
        }
        )
    }
  }

  render() {
    const { source, likes } = this.state;
    const { name,
      category,
      id,
      style,
      handleClick
    } = this.props;
    return (
      <div className="card" style={style} onClick={handleClick ? () => handleClick(id) : () => { }}>
        <div>
          <Link to={`/courses/${id}`}>
            <div>
              
              {likes > 500 ? <div className="popular-tag" style={{
                display: 'inline-block',
                color: 'black',
                fontWeight: 'bold',
                background: '#f4c150',
                width: 'auto',
                padding: '0px 3px 0px 6px',
                position: 'relative',
                top: '5px',
                border: 'none',
                fontSize: '0.8rem',
                textTransform: 'uppercase'
              }}>
                Popular
                </div>: ''}

              <img width="188" style={{
                height: '125px',
                marginTop: likes > 500 ? '-22px' : '-1px',
              }} src={source || 'https://images.unsplash.com/photo-1564299046452-588e3a6284e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80'} alt="" />

              <div style={{ margin: '0 10px' }}>

                <div className="course-name">
                  {name}
                </div>

                <div className="course-category">{category ? category.split(' ').map(w => w[0] ? w[0].toUpperCase() + w.substr(1).toLowerCase() : '').join(' ') : ''}</div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <svg style={{
                      margin: '0 5px 0 0'
                    }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#004792AA" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.308 11.794c.418.056.63.328.63.61 0 .323-.277.66-.844.705-.348.027-.434.312-.016.406.351.08.549.326.549.591 0 .314-.279.654-.913.771-.383.07-.421.445-.016.477.344.026.479.146.479.312 0 .466-.826 1.333-2.426 1.333-2.501.001-3.407-1.499-6.751-1.499v-4.964c1.766-.271 3.484-.817 4.344-3.802.239-.831.39-1.734 1.187-1.734 1.188 0 1.297 2.562.844 4.391.656.344 1.875.468 2.489.442.886-.036 1.136.409 1.136.745 0 .505-.416.675-.677.755-.304.094-.444.404-.015.461z" /></svg>
                    <span>{likes}</span>
                  </div>
                  <div style={{ fontWeight: 100, fontSize: '1.1rem', letterSpacing: '1px' }}>FREE</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div >
    )
  }
}
