/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import ClosetCard from './ClosetCard.jsx';

class Closet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsInCloset: [],
    };
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tempCard !== this.props.tempCard) {

      if (this.state.cardsInCloset.some(person => person.name === this.props.tempCard.name) === false) {
        this.setState({
          cardsInCloset: [...this.state.cardsInCloset, this.props.tempCard],
        });
    }
    }
  }

  handleDeleteCard(input) {
    // console.log(input)
    // find name of item in card in closet
    const tempArr = [];
    this.state.cardsInCloset.forEach((card) => {
       if (!card.name.includes(input)) {
         tempArr.push(card);
       }
    });
    this.setState({
      cardsInCloset: tempArr
    })
  }

  render() {
    const { cardsInCloset } = this.state;
    // console.log(cardsInCloset);
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="card-deck">
          {
        cardsInCloset && cardsInCloset.map((card) => (
          <ClosetCard
            category={card.category}
            name={card.name}
            price={card.price}
            thumbnail={card.thumbnail}
            handleDeleteCard={this.handleDeleteCard}
          />
        ))
      }
        </div>
      </div>
    );
  }
}

export default Closet;
