import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import '../../style.css'

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="row justify-content-between my-4 p-3">
            <div className='col-md-3'>
                <img src={img} alt="" />
            </div>
            <div className='col-md-9'>
                <h4 className="product-name"><Link className='text-danger' to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                { props.showAddToCart === true && <button 
                    className="btn btn-outline-danger" 
                    onClick={() => props.handleAddProduct(props.product)}
                    > 
                        <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                    </button>}
            </div>

        </div>
    );
};

export default Product;