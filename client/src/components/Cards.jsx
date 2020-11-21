/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsArr: [],
      imageURL: '',
      currentProduct: 3,
      productName: '',
      price: '',
      allProduct: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios.get(`http://52.26.193.201:3000/products/${this.state.currentProduct}/related`)
      .then((res) => this.setState({
        productsArr: res.data,
      }))
      .then(() => {
        const allProducts = [];
        const axiosRequests = [];
        const productArr = this.state.productsArr;
        for (let i = 0; i < productArr.length; i++) {
          const currentID = productArr[i];
          axiosRequests.push(axios.get(`http://52.26.193.201:3000/products/${currentID}`));
        }

        Promise.all(axiosRequests)
          .then((responsesArr) => {
            const responsesData = responsesArr.map((res) => res.data);
            this.setState({
              allProduct: responsesData,
            }, () => console.log(this.state.allProduct));
          });
      })
      .then((res) => this.setState({
        isLoading: false,
      }))
      .catch((err) => console.log('err at get request client'));
  }

  // make array of thumbnails
  // iterate over all products
  // axios.get(`http://52.26.193.201:3000/products/${product.id}/styles`)
  //   .then((res) => console.log(res.data.results[1].photos[0].thumbnail_url))
  //   .catch((err) => console.log('err at product style get request'));

  render() {
    // const { allProduct, isLoading } = this.state;
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="card-deck">
          
          {this.state.allProduct.map((product) => 
          
           <div>
             <ProductCard 
             productName={product.name}
             default_price={product.default_price}
             category={product.category}
             />
           </div> 
          
          
          )}
        </div>
      </div>
    );
  }
}

export default Cards;
