import React, { Component } from 'react';
import { carouselData } from '../../data'

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      index: 0
    }
  }
  componentDidMount(){
    this.setState({ images: carouselData})
    this.selectedImage();
  }

  leftClick = () => {
    this.setState({
      index: this.state.index - 1
    })
  }

  rightClick = () => {
    this.setState({
      index: this.state.index + 1
    })
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.index]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}