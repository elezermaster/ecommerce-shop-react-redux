import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ModalOrder = ({
    show, handleClose, title, body, close, confirm, handlePlaceOrder
}) => {
    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                <div className="login-form">
                        <h2>
                            Register
                        </h2>
                        <hr />
                       <div className="inputs-wrapper">
                           <div>
                                <input 
                                    className="form-control"
                                    placeholder='email'
                                  //  value={email}
                                    type="text" 
                                    onChange={e=>{}
                                  //      setEmail(e.target.value)
                                    }
                                    />
                                <input 
                                    className="form-control"
                                    placeholder='password'
                                //    value={password}
                                    type="text" 
                                    onChange={e=>{}
                                //        setPassword(e.target.value)
                                    }
                                    />
                                <input 
                                    className="form-control"
                                    placeholder='confirm'
                                //    value={cpassword}
                                    type="text" 
                                    onChange={e=>{}
                                //        setCPassword(e.target.value)
                                    }
                                    />
                           </div>
                       </div>    
                        {/* <button
                            className="my-3 button-28"// button-55"
                        //    onClick={handleRegister}
                        >
                            REGISTER
                        </button> */}
                        <hr />
                        {/* <Link
                            className="link-login"
                            to='/login'>
                               GO TO LOGIN
                        </Link> */}
                    </div>

                </Modal.Body>
                <Modal.Footer>
                <button
                    className="my-3 button-28 modal-order-button"
                    onClick={handleClose}
                >
                    CLOSE
                </button>                    
                {/* <Button variant="secondary" onClick={handleClose}>
                    {close}
                </Button> */}
                {/* <Button 
                    onClick={handlePlaceOrder}
                    variant="primary">
                    {confirm}
                </Button> */}
                <button
                    className="my-3 button-28 modal-order-button"
                    onClick={handlePlaceOrder}
                >
                    CONFIRM
                </button>                  
                </Modal.Footer>
            </Modal>            
        </div>
    );
};

export default ModalOrder;