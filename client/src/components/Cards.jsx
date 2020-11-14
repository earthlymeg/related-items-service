import React, { Component } from 'react';
import ProductCard from './ProductCard.jsx';

class Cards extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <ProductCard />
                    </div>
                    <div className="col-md-4">
                        <ProductCard />
                    </div>
                    <div className="col-md-4">
                        <ProductCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;