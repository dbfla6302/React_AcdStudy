import React from 'react';
import { Link } from "react-router-dom";
import data from './data'

const Product = () => {
    return (
        <div className="products">
            <h2>운동화 목록</h2>
            <div>
                {
                    data.map( item => <article>
                        <Link to={`/product/${item.id}`}>
                            <h3>{item.name}</h3>
                            <img src={item.photo} alt={item.name} />
                            <p>{item.description}</p>
                        </Link>
                    </article> )
                }
            </div>
        </div>
    );
};

export default Product;