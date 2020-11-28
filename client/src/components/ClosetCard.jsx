import React from 'react';
import './styles.css';

function ClosetCard(props) {
  // console.log(props);
  return (
    <div className="card">
      <button className="btn btn-primary float-right" onClick={() => { props.handleDeleteCard(props.name); }}>Delete</button>

      <img className="card-img-top" src={props.thumbnail} alt="Card image cap" />
      <div className="card-body">
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
