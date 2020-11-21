/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ProductCard from './ProductCard.jsx';
import Cards from './Cards.jsx';
import Closet from './Closet.jsx'
import './styles.css';

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      tempCard: {
        category: '',
        name: '',
        price: '',
        thumbnail: '',  
      }
    };
    this.handleAddCard = this.handleAddCard.bind(this);
  }

  handleAddCard() {
    this.setState({
      tempCard: {
        category: arguments[0],
        name: arguments[1],
        price: arguments[2],
        thumbnail: arguments[3],  
      }
    });
  }

  render() {
    return (

      <div>
        <div className="App">Related Items</div>
        <Cards 
        handleAddCard={this.handleAddCard}
        />
        <div className="my-closet">My Closet</div>
        <Closet 
        tempCard={this.state.tempCard}
        />
      </div>
    );
  }
}

export default App;
