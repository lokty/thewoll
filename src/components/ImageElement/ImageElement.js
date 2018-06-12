import React, { Component } from 'react';
import './ImageElement.scss';
import dogo from './dogo.png'

class ImageElement extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="image-element">
        <img src={ dogo } />
     </div>
    )
  }
}

export default ImageElement;
