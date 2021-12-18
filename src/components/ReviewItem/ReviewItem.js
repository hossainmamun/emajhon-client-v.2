import React from 'react';
import '../../style.css'

const ReviewItem = (props) => {
    const {name, quantity, key, price, img} = props.product;
    return (
        <div className="row align-items-center border my-4 p-4">
            <div className="col-md-3">
                <img src={img} className="img-fluid" alt="not found" />
            </div>
            <div className='col-md-8'>
                <h4 className="product-name">{name}</h4>
                <p>Quantity: {quantity}</p>
                <p><small>$ {price}</small></p>
                <br />
                <button
                    className="btn btn-outline-danger"
                    onClick={() => props.removeProduct(key)}
                >Remove </button>
            </div>
        </div>
    );
};

export default ReviewItem;