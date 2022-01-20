import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import Table from 'react-bootstrap/Table'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ModalOrder from '../components/ModalOrder';

const CartPage = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    const {cartItems} = useSelector(state => state.cartReducer)
    const [show, setShow] = useState(false);

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleClose = () => {
        setShow(false);
    } 
    const handleShow = () => {
        setShow(true);
    } 
    const handlePlaceOrder = () => {
        const order = {
            name,
            address,
            pincode,
            phoneNumber,
                      
        }
        console.log("order created", order)
    }


    useEffect(() => {
        let sum = 0;
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        cartItems.forEach(item => sum = sum + item.price)
        setTotalAmount( Number(sum).toFixed(2) )
    }, [cartItems])

    const dispatch = useDispatch()
    const handleDeleteFromCart = (item) => {
        dispatch({type: 'DELETE_FROM_CART', payload: item})
    }

    let elementsCart = null;
    elementsCart = cartItems.map((item, index) =>{
        return (<tr key={item.id + index}>
                <td>{index}</td>
                <td><img
                    style={{
                        width: 30
                    }}
                    src={item.imageUrl}
                    alt={item.imageUrl}/></td>
                <td>{item.name}</td>
                <td>{`${item.price}$`}</td>
                <td><button
                        className="button-cart"
                        onClick={()=>handleDeleteFromCart(item)}>
                        <DeleteForeverOutlinedIcon style={{fontSize:30}}/></button>
                </td>
            </tr>)
    })

    return (
        <Layout>
            <div>
                <div>
                <h1>cart page</h1>
                    <Table  bordered hover> {/* striped */}
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>image</th>
                            <th>name</th>
                            <th>price</th>
                            <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems ? elementsCart : null}
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-end">
                        <h1 className="total-amount">{`total amount = ${totalAmount}$`}</h1>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button 
                            onClick={handleShow}
                            className="button-28 ">
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </div>
        <ModalOrder
             show={show}
             handleClose={handleClose} 
             title={"title"} 
             body={"body order"} 
             close={"close"} 
             confirm={"confirm"}
             name={name} 
             setName={setName}
             address={address} 
             setAddress={setAddress} 
             pincode={pincode} 
             setPincode={setPincode}
             phoneNumber={phoneNumber} 
             setPhoneNumber={setPhoneNumber}
             handlePlaceOrder={handlePlaceOrder}
        />
        </Layout>
    );
};

export default CartPage;