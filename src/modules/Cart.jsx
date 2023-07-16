import React, { Component } from 'react'
import ModalConfirmfrom from './component/modal'

export default class Cart extends Component {
    state = {
        showModalConfirm: false,
        deleteProductId: null,
    };
    openModalConfirm = (productId) => {
        this.setState({
            showModalConfirm: true,
            deleteProductId: productId,
        });
    };
    handleConfirmDelete = () => {
        const { deleteProductId } = this.state;
        this.props.onDeleteProduct(deleteProductId);
        this.closeModalConfirm();
    };
    closeModalConfirm = () => {
        this.setState({
            showModalConfirm: false,
            deleteProductId: null,
        });
    };



    render() {
        const { cart, closePopupCart, onDeleteProduct, onChangeQuantity } = this.props
        return (
            <div>
                <div>
                    <button className="btn btn-danger float-end" onClick={closePopupCart}>x</button>
                    <table className='table'>

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((sp, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{sp.id}</td>
                                        <td><img style={{
                                            width: 100,
                                        }} src={sp.image} alt="Product" /></td>
                                        <td>{sp.name}</td>
                                        <td>{sp.price}</td>
                                        <td>
                                            <button style={{
                                                border: '1px solid white',
                                                borderRadius: '50%',
                                                padding: '2px 5px'
                                            }}
                                                onClick={() => {
                                                    onChangeQuantity({
                                                        quantity: -1,
                                                        id: sp.id,
                                                    })
                                                }}
                                            ><i className='fas fa-chevron-left'></i>
                                            </button>
                                            {sp.soLuong}
                                            <button style={{
                                                border: '1px solid white',
                                                borderRadius: '50%',
                                                padding: '2px 5px'
                                            }}
                                                onClick={() => {
                                                    onChangeQuantity({
                                                        quantity: 1,
                                                        id: sp.id,
                                                    })
                                                }}
                                            ><i className='fas fa-chevron-right'></i></button>
                                        </td>
                                        <td>{sp.price * sp.soLuong}</td>
                                        <td><button onClick={() => {
                                            this.openModalConfirm(sp.id)
                                        }} className='btn'><i className="fa-solid fa-trash"></i></button></td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>
                        <div className='float-end'>
                            <h5>Total :
                                <span> ${this.props.cart.reduce((totalFunds, sp) => {
                                    return totalFunds += sp.soLuong * sp.price
                                }, 0)
                                }</span>
                            </h5>


                        </div>
                </div>


                {this.state.showModalConfirm && (
                    <ModalConfirmfrom
                        modal={{
                            title: "Xác nhận xoá",
                            content: "Bạn có chắc chắn muốn xoá sản phẩm này?",
                            onCancle: this.closeModalConfirm,
                            onOK: this.handleConfirmDelete,
                        }}
                    />
                )}

            </div>
        )
    }
}
