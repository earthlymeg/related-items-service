/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsArr: '',
    };
  }

  componentDidMount() {
    axios.get('http://52.26.193.201:3000/products/list')
      .then((res) => this.setState({
        productsArr: res.data,
      }))
      .catch((err) => console.log('err at get request client'));
  }

  render() {
    const { productsArr } = this.state;

    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="card-deck">

          {productsArr && productsArr.map((product) => {
            if (product.id !== 2) {
              axios.get(`http://52.26.193.201:3000/products/${product.id}/styles`)
                .then((res) => console.log(res.data.results[1].photos))
                .catch((err) => console.log('err at product style get request'));

              return (
              <div>
                <ProductCard
                  productName={product.name}
                  default_price={product.default_price}
                  category={product.category}
                />
              </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}


export default Cards;
