import React, { Component } from 'react'
import logo from './logo.jpg'
import './styles/css/App.css'
import ImageElement from './components/ImageElement/ImageElement'

const elements = [
  { element: <ImageElement /> , x: 100, y: 200 },
  { element: <ImageElement /> , x: 200, y: 300 }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { elements: elements }
  }

  componentDidMount () {
    this.setState({ elements: elements })
  }

  addNewElement(x, y) {
    const newElements = this.state.elements
    newElements.push({ element: <ImageElement /> , x: x, y: y })
    this.setState({ elements: newElements })
  }

  render() {
    return (
      <div className="app" onClick={ (e) => { this.addNewElement(e.screenX, e.screenY) }}>
        { this.state.elements.map((item, index) => {
            return (
              <div key={ index } className="element-wrapper" style={{ left: item.x, top: item.y }}>
                { item.element }
              </div> )
        })}
      </div>
    );
  }
}

export default App;
