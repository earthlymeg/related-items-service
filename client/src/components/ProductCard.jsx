import React from 'react';
import './styles.css';

// eslint-disable-next-line react/prop-types
function ProductCard({ pic }) {
  return (
    <div>
      <div className="star">
        <i className="icon-star-empty" />
      </div>
      <div className="card">
        <div className="overflow">
          <img src={pic} alt="" />
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
  );
}

export default ProductCard;
