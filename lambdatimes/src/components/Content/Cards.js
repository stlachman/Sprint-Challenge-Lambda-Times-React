import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  console.log(props);
  return (
    <div className="cards-container">
      {props.cards.map((card, i) => {
        return <Card card={card} key={i} />
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default Cards;