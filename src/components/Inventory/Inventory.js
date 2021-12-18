import React from 'react';
import fakeData from '../../fakeData/'

const Inventory = () => {
    const handleAddProduct = () => {
        fetch('https://pacific-inlet-47816.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData[0])
        })
    }
    return (
        <div className='container text-center'>
            <h1>Inventory coming soon...</h1>
            <button className='btn btn-outline-info' onClick={handleAddProduct}>Product Loader</button>
        </div>
    );
};

export default Inventory;