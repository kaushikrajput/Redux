import React from 'react';
import Products from '../../components/Products/Products';
import './style.scss'

const Home = () => {
    return (
        <div>
            <section className='home'>
                <h2>Products</h2>
                <Products />
            </section>
        </div>
    );
};

export default Home;