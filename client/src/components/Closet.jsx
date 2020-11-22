import React, { Component } from 'react';
import ClosetCard from './ClosetCard.jsx';

class Closet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsInCloset: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tempCard !== this.props.tempCard) {
      this.setState({
        cardsInCloset: [...this.state.cardsInCloset, this.props.tempCard],
      }, () => console.log(this.state.cardsInCloset));
    }
  }

  render() {
    const { cardsInCloset } = this.state;
    return (
      <div className="container-fluid d-flex justify-content-center">
      <div className="card-deck">
        {
        cardsInCloset && cardsInCloset.map((card) => <ClosetCard />)
      }
      </div>
      </div>
    );
  }
}

export default Closet;
