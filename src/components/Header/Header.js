import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import '../../style.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg fixed-top navbar-danger bg-dark">
                <div class="container">
                    <Link to="/shop" class="navbar-brand text-white fw-bold">Ema-Jhon-Store</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link className='nav-link text-white' to="/shop">Shop</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='nav-link text-white' to="/review">Order Review</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='nav-link text-white' to="/inventory">Manage Inventory</Link>
                            </li>
                            <li class="nav-item">
                                {
                                    loggedInUser.email && <span className='text-white d-inline-block me-3'>{loggedInUser.name}</span>
                                }
                                <button className='btn btn-outline-light' onClick={() => setLoggedInUser({})}>Sign out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;