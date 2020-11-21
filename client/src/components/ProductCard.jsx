/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.css';

// eslint-disable-next-line react/prop-types
class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line react/prop-types
    // const { pic } = this.props;
    this.state = {
      clicked: false,
      color: 'white',
    };
    this.starClicked = this.starClicked.bind(this);
  }

  starClicked() {
    const { clicked } = this.state;
    if (clicked) {
      this.setState({
        clicked: false,
        color: 'white',
      });
    } else {
      this.setState({
        clicked: true,
        color: '#f2dcbb',
      });
    }
  }

  render() {
    // if (this.props.photo !== undefined) {
    //   console.log('props from product card', this.props.photo.results[0].photos[0].thumbnail_url)
    // }
    return (
      <div>
        <div
          className="star"
          style={{ color: this.state.color }}
          onClick={this.starClicked}
        >
          <label />
        </div>
        <div className="card" 
          data-toggle="modal" 
          data-target="#comparison"
          >
          <img className="card-img-top" src={this.props.photo && this.props.photo.results[0].photos[0].thumbnail_url} alt="Card image cap" />
          <div className="card-body text-dark">

            <h4 className="card-title"><small>{this.props.category}</small></h4>
            <p className="card-text">
              <strong>{this.props.productName}</strong>
              <br />
              $
              <small>{this.props.default_price}</small>
            </p>
            <button type="button" className="btn btn-primary" onClick={ () => this.props.handleAddCard(this.props.category, this.props.productName, this.props.default_price, this.props.photo && this.props.photo.results[0].photos[0].thumbnail_url)}>Add to closet</button>
            <div className="d-flex align-items-end stars-div">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half" />
            </div>
          </div>
        </div>

        <div className="modal fade" id="comparison" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="container">
                <h5 className="modal-title" id="exampleModalLabel"><small>Comparing</small></h5>
                <div className="modal-body">

                  <div className="row">

                    <div className="col-4 product-col">
                      <h5>Item1</h5>
                      <div className="row test">
                        ✅
                      </div>
                      <div className="row test">
                        💖
                      </div>
                      <div className="row test">
                        🎸
                      </div>
                      <div className="row test">
                        🍆
                      </div>
                      <div className="row test">
                        ☀️
                      </div>
                      <div className="row test">
                        🥃
                      </div>
                      <div className="row test">
                        (｡◕‿◕｡)
                      </div>
                      <div className="row test">
                        🍆
                      </div>
                    </div>
                    <div className="col-4 justify-content-center mt-auto mine">
                      <div className="row justify-content-center">
                          &nbsp;
                      </div>
                      <div className="row justify-content-center texts">
                        <small>love</small>
                        <br />
                      </div>
                      <div className="row justify-content-center texts">
                        <small>Free-Range</small>
                        <br />
                      </div>
                      <div className="row justify-content-center texts">
                        <small>Trendy</small>
                        <br />
                      </div>
                      <div className="row justify-content-center texts">
                        <small>Comfy-Approved</small>
                        <br />
                      </div>
                      <div className="row justify-content-center texts">
                        <small>10/10 cows approve this purchase</small>
                        <br />
                      </div>
                      <div className="row justify-content-center texts">
                        <small>Vegan</small>
                        <br />
                      </div>
                      <div className="row justify-content-center texts">
                        <small>guaranteed to make your ex jealous</small>
                        <br />
                      </div>
                    </div>
                    <div className="col-4 product-col-right">
                      <h5>Item2</h5>
                      <div className="row right-emojis">
                        ✅
                      </div>
                      <div className="row right-emojis">
                        💖
                      </div>
                      <div className="row right-emojis">
                        🎸
                      </div>
                      <div className="row right-emojis">
                        🍆
                      </div>
                      <div className="row right-emojis">
                        ☀️
                      </div>
                      <div className="row right-emojis">
                        🥃
                      </div>
                      <div className="row right-emojis">
                        (｡◕‿◕｡)
                      </div>
                      <div className="row right-emojis">
                        🍆
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    footer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
