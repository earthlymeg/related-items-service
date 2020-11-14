import React from 'react';
import './styles.css';

function ProductCard({ pic }) {
  return (
    <div className="card text-center" data-toggle="modal" data-target="#exampleModal">
      <div className="overflow">
        <img src={pic} alt="" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
          Ex rem repellat omnis totam tempore iure magni, \
          saepe ut error iusto doloremque nam? \
          Eligendi beatae laboriosam libero illo soluta dolorum a.
        </p>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Product title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" />
            <div className="modal-footer" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;
