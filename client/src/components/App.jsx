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
  }

  render() {
    return (

      <div>
        <div className="App">Related Items</div>
        <Cards />
        <div className="my-closet">My Closet</div>
        <Closet />
      </div>
    );
  }
}

export default App;
