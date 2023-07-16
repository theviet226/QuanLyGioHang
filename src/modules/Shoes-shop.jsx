import React from 'react';
import Header from './component/header';
import { data } from '../data/mock-data';
import Product from './Product';
import ProductDetails from './Product-details';
import Modal from 'react-modal';
import Cart from './Cart';

const listProduct = data;
Modal.setAppElement('#root');

export default class ShoesShop extends React.Component {
    state = {
        spChiTiet: null,
        isPopupOpen: false,
        isPopupCart: false,
        cart: [],
        modal: null,
    };

    handleProductDetails = (sp) => {
        this.setState({
            spChiTiet: sp,
        });
        this.openPopup();
    };
    handleAddToCart = (sp) => {
        const indexSp = this.state.cart.findIndex((item) => sp.id === item.id)
        let newCart = []
        if (indexSp === -1) {
            sp.soLuong = 1
            newCart = [...this.state.cart, sp]
        } else {
            sp.soLuong += 1
            this.state.cart.splice(indexSp, 1, sp)
            newCart = this.state.cart
        }
        this.setState({
            cart: newCart
        })
    }

    openPopup = () => {
        this.setState({
            isPopupOpen: true,
        });
    };

    closePopup = () => {
        this.setState({
            spChiTiet: null,
            isPopupOpen: false,
        });
    };
    openPopupCart = () => {
        this.setState({
            isPopupCart: true,
        });
    };
    closePopupCart = () => {
        this.setState({
            isPopupCart: false
        })
    };
    handeleDeleteProduct = (id) => {
        const newCart = this.state.cart.filter((item) => item.id !== id);
        this.setState({
            cart: newCart
        })

    }
    changeQuantity = (params) => {
        const { quantity, id } = params;
        const product = this.state.cart.find((item) => item.id === id);
        if (!product) return;

        if (quantity === -1 && product.soLuong === 1) {
            return;
        }

        product.soLuong += quantity;
        this.setState({
            cart: this.state.cart
        });
    };


    getTotalQuantity = () => {
        let totalQuantity = 0;
        this.state.cart.forEach((product) => {
            totalQuantity += product.soLuong;
        });
        return totalQuantity;
    };

    render() {
        return (
            <div className="container">
                <Header />
                <Modal
                    isOpen={this.state.isPopupCart}
                    contentLabel="Cart"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        },
                        content: {
                            width: '1400px',
                            height: '600px',
                            margin: 'auto',
                            borderRadius: '8px',

                        },
                    }}

                >{this.state.cart && (
                    <Cart cart={this.state.cart}
                        closePopupCart={this.closePopupCart}
                        onDeleteProduct={this.handeleDeleteProduct}
                        onChangeQuantity={this.changeQuantity}
                    />

                )}
                </Modal>

                <button
                    style={{
                        fontSize: '35px',
                    }}
                    className="btn me-3 float-end"
                    onClick={this.openPopupCart}
                >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="bg-info" style={{
                        position: 'absolute',
                        fontSize: '15px',
                        right: '320px',
                        top: '60px',
                        padding: '5px',
                        borderRadius: '50%',
                        height: '25px',
                        width: '25px',
                        lineHeight: '15px',
                        boder: '1px solid white'
                    }}>
                        {this.getTotalQuantity()}
                    </span>
                </button>
                <div className="mt-5">
                    <div className="row">
                        {listProduct.map((item) => (
                            <div key={item.id} className="col-3 mt-3">
                                <Product
                                    shoes={item}
                                    handleProductDetails={this.handleProductDetails}
                                    handleAddToCart={this.handleAddToCart}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Modal
                    isOpen={this.state.isPopupOpen}
                    onRequestClose={this.closePopup}
                    contentLabel="Product Details"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        },
                        content: {
                            width: '1400px',
                            height: '600px',
                            margin: 'auto',
                            borderRadius: '8px',
                            padding: '20px',
                        },
                    }}
                >
                    {this.state.spChiTiet && (
                        <ProductDetails
                            product={this.state.spChiTiet}
                            closePopup={this.closePopup}
                            handleAddToCart={this.handleAddToCart}
                        />
                    )}
                </Modal>

            </div>
        );
    }
}
