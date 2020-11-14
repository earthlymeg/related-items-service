import React, { Component } from 'react';
import ProductCard from './ProductCard.jsx';
import chris from '../pics/chris.png';
import gordo from '../pics/gordo.png';
import ty from '../pics/ty.png';

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
                        <ProductCard pic={chris}/>
                    </div>
                    <div className="col-md-4">
                        <ProductCard pic={gordo}/>
                    </div>
                    <div className="col-md-4">
                        <ProductCard pic={chris}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;