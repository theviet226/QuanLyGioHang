import React, { Component } from 'react'

export default class ProductDetails extends Component {
    render() {
        const { product,closePopup,handleAddToCart } = this.props
        return (
            <div className="popup">
                <div className="popup-inner">
                    <div className="popup-content">
                        <button className="btn btn-danger float-end" onClick={closePopup}>x</button>
                        <div className="row">
                            <div className="col-5">
                                <img src={product.image} className="popup-image" alt="Product" />
                            </div>
                            <div className="col-7">
                                <h2 className=" mt-5">{product.name}</h2>
                                <h4 className="mt-3">Price: ${product.price}</h4>
                                <p className="mt-5">{product.description}</p>
                                <p className="mt-3">{product.shortDescription}</p>
                                <p className="mt-3">Quantity: {product.quantity}</p>
                                <button onClick={()=> {
                                    handleAddToCart(product)
                                }} className='btn btn-success mt-5'>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         
        )
    }
}
