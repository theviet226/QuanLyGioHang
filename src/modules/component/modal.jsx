import React, { Component } from 'react'

export default class ModalConfirm extends Component {

    render() {
        const { modal } = this.props
        return (
            <div>
                <div
                    className="modal"
                    tabIndex={-1}
                    style={{
                        display: "block",
                    }}
                >
                    <div style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }} className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modal.title}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <p>{modal.content}</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    onClick={modal.onCancle}
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Không
                                </button>
                                <button
                                    onClick={modal.onOK}
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
