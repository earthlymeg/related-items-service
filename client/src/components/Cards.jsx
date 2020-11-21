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
      productStyles: [],
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
        const photoAxiosRequests = [];

        const productArr = this.state.productsArr;
        for (let i = 0; i < productArr.length; i++) {
          const currentID = productArr[i];
          axiosRequests.push(axios.get(`http://52.26.193.201:3000/products/${currentID}`));
          photoAxiosRequests.push(axios.get(`http://52.26.193.201:3000/products/${currentID}/styles`));
        }

        Promise.all(axiosRequests)
          .then((responsesArr) => {
            const responsesData = responsesArr.map((res) => res.data);
            this.setState({
              allProduct: responsesData,
            });
          });

        Promise.all(photoAxiosRequests)
          .then((responsesArr) => {
            const styleData = responsesArr.map((res) => res.data);
            this.setState({
              productStyles: styleData,
            });
          });
      })
      .then((res) => this.setState({
        isLoading: false,
      }))
      .catch((err) => console.log('err at get request client'));
  }


  render() {
    // const { allProduct, isLoading } = this.state;
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (

      <div className="container-fluid d-flex justify-content-center">
        <div className="card-deck">

          {this.state.allProduct.map((product) => {
            var idToFind = product.id;
            var index;
            const { productStyles } = this.state;
            for (var i = 0; i < productStyles.length; i++) {
              // console.log(productStyles[i].product_id === idToFind.toString());
              if (productStyles[i].product_id === idToFind.toString()) {
                index = i;
              }
            }

            return (
              <div>
                <ProductCard
                  productName={product.name}
                  default_price={product.default_price}
                  category={product.category}
                  photo={productStyles[index]}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cards;
