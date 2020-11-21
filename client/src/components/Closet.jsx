import React, { Component } from 'react';

class Closet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsInCloset: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tempCard !== this.props.tempCard) {
      this.setState({
        cardsInCloset: [...this.state.cardsInCloset, this.props.tempCard] 
      }, () => console.log(this.state.cardsInCloset)) 
    }
  }

  render() {
    return (
      <div className="card-deck" />
    );
  }
}

export default Closet;
