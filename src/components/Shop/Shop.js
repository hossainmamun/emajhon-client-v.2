import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import '../../style.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://pacific-inlet-47816.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }, [])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        fetch('https://pacific-inlet-47816.herokuapp.com/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
            .then(res => res.json())
            .then(data => {
                setCart(data)
            })
    }, [])

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-between">
                <div className="col-md-8 border p-3 ms-4">
                    {
                        products.map(pd => <Product
                            key={pd.key}
                            showAddToCart={true}
                            handleAddProduct={handleAddProduct}
                            product={pd}
                        ></Product>)
                    }
                </div>
                <div className="col-md-3 border p-5 me-4">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="btn btn-outline-secondary">Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
            
            

        </div>
    );
};

export default Shop;