import React from 'react';
import './styles.css';

function ClosetCard(props) {
  // console.log(props);
  return (
    <div className="product-card">

      {/* <button className="btn btn-primary float-right" onClick={() => { props.handleDeleteCard(props.name); }}>Delete</button> */}
      <img className="card-img-top" src={props.thumbnail} alt="Card image cap" />
      <i className="fas fa-minus-circle" onClick={() => { props.handleDeleteCard(props.name); }}></i>

      <div className="card-body text-dark">
        <h5 className="card-title"><small>{props.category}</small></h5>
        <p className="card-text">
          <strong>{props.name}</strong>
          <br />
          $
          {' '}
          <small>{props.price}</small>
        </p>
        <div className="d-flex align-items-end stars-div">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-half" />
        </div>
      </div>
    </div>

  );
}

export default ClosetCard;
