import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        const { shoes, handleProductDetails, handleAddToCart } = this.props;
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={shoes.image} className="card-img-top" alt="Product" />
                    <div className="card-body">
                        <h5 className="card-title">{shoes.name}</h5>
                        <h4 className="card-text">${shoes.price}</h4>
                        <div className="d-flex gap-3">
                            <button onClick={() => {
                                handleAddToCart(shoes);
                            }} className="btn btn-secondary">
                                Add to cart
                            </button>
                            <button
                                onClick={() => {
                                    handleProductDetails(shoes);
                                }}
                                className="btn btn-primary"
                            >
                                Xem chi tiết
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
