import React, { Component } from 'react';
import { carouselData } from '../../data';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	height: 500px;
	position: relative;
	overflow: hidden;
	margin-top: 16px;

	@media (min-width: 1200px) {
		width: 1200px;
	}
`;

const CarouselButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: none;
	flex-direction: row;
	color: #fff;
	background-color: #333;
	font-size: 40px;
	border-radius: 50%;
	position: absolute;
	width: 50px;
	height: 50px;
	cursor: pointer;

	&:hover {
		color: #333;
		background-color: #fff;
		border: 2px solid #333;
	}
`;

const ButtonLeft = styled(CarouselButton)`
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);
`;

const ButtonRight = styled(CarouselButton)`
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);
`;

// Complete this Carousel
export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			index: 0
		};
	}
	componentDidMount() {
		this.setState({ images: carouselData });
	}

	leftClick = () => {
		if (this.state.index === 0) {
			this.setState({ index: this.state.images.length - 1 });
		} else {
			this.setState({
				index: this.state.index - 1
			});
		}
	};

	rightClick = () => {
		if (this.state.index < this.state.images.length - 1) {
			this.setState({
				index: this.state.index + 1
			});
		} else {
			this.setState({ index: 0 });
		}
	};

	selectedImage = () => {
		return <img src={this.state.images[this.state.index]} style={{ display: 'block' }} />;
	};

	render() {
		return (
			<CarouselWrapper>
				{this.selectedImage()}
				<ButtonLeft onClick={this.leftClick}>{'<'}</ButtonLeft>
				<ButtonRight onClick={this.rightClick}>{'>'}</ButtonRight>
			</CarouselWrapper>
		);
	}
}
