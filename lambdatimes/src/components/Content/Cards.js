import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = (props) => {
	return (
		<div className="cards-container">
			{props.cards.map((card, i) => {
				return <Card card={card} key={i} />;
			})}
		</div>
	);
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			headline: PropTypes.string,
			tab: PropTypes.string,
			img: PropTypes.string,
			author: PropTypes.string
		})
	)
};

export default Cards;
