import React from 'react';
//import chris from '../pics/chris.png';
import gordo from '../pics/gordo.png';

function ProductCard(props) {
  


    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={gordo} alt="gordo"/>
           </div>
           <div className="card-body text-dark">
               <h4 className="card-title">Card Title</h4>
               <p className="card-text text-secondary">
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex rem repellat omnis totam tempore iure magni, saepe ut error iusto doloremque nam? Eligendi beatae laboriosam libero illo soluta dolorum a.
               </p>
           </div>
        </div>
    );
}

export default ProductCard;