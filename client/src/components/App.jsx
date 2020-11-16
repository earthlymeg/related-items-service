/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ProductCard from './ProductCard.jsx';

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
        <ProductCard />
      </div>
    );
  }
}

export default App;
