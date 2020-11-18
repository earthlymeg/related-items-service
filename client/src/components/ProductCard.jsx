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
    return (
      <div>
        <div className="parent">
          <div
            className="star"
            style={{ color: this.state.color }}
            onClick={this.starClicked}
          >
            <label />
          </div>
          <div className="card" data-toggle="modal" data-target="#comparison">
            <div className="overflow">
              <img src={this.props.pic} alt="" />
            </div>
            <div className="card-body text-dark">

              <h4 className="card-title">Card Title</h4>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
                Ex rem repellat omnis totam tempore iure magni, \
                saepe ut error iusto doloremque nam? \
                Eligendi beatae laboriosam libero illo soluta dolorum a.
              </p>
            </div>
          </div>
        </div>

        <div className="modal fade" id="comparison" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className="container">
                  <h5 className="modal-title" id="exampleModalLabel"><small>Comparing</small></h5>
                  <div className="modal-body">

                    <div className="row">

                      <div className="col float-left product-col">
                        <h5>Item1</h5>
                      </div>
                      <div className="col float-right product-col-right">
                        <h5>Item2</h5>
                      </div>
                    </div>
                    <div classNam="row">

                      <div className="col">
                        ✅
                      </div>
                      <div className="col">
                        is nice
                      </div>
                      <div className="col">
                        ✅
                      </div>

                    </div>
                  </div>
                  <div className="modal-footer" />
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
