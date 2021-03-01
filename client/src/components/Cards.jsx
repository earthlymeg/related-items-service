/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import './styles.css'
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsArr: [],
      imageURL: '',
      currentProduct: 8,
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
        <div id="carouselExampleIndicators" class="carousel carousel-fade" data-ride="carousel">
         
          <div class="carousel-inner">

            {/* Active view of carousel, iterate for 1st 5 items */}
            <div class="carousel-item active">
              <div className="row">
                {this.state.allProduct.length > 0 && this.state.allProduct.map((product, index) => {
                  while (index < 5) {
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
                    <div className="col-md-auto">
                      <ProductCard
                        productName={product.name}
                        default_price={product.default_price}
                        category={product.category}
                        photo={productStyles[index]}
                        handleAddCard={this.props.handleAddCard}
                      />
                    </div>
                  );

                  }

                })}
              </div>
            </div>


            <div class="carousel-item">
              <div className="row">
              {this.state.allProduct.length > 0 && this.state.allProduct.map((product, index) => {
                  if (index >= 5) {
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
                    <div className="col-md-auto">
                      <ProductCard
                        productName={product.name}
                        default_price={product.default_price}
                        category={product.category}
                        photo={productStyles[index]}
                        handleAddCard={this.props.handleAddCard}
                      />
                    </div>
                  );

                  }
                  
                })}
              </div>
            </div>



          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>





      </div>
    );
  }
}

export default Cards;