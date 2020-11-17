import React from 'react';
import './styles.css';

// eslint-disable-next-line react/prop-types
class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line react/prop-types
    const { pic } = this.props;
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
          <div className="card" data-toggle="modal" data-target="#glassAnimals">
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

        <div className="modal fade" id="glassAnimals" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Glass Animals</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger">Track Artist</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ProductCard;
