import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import { doc, collection, setDoc, updateDoc, addDoc, getDocs } from "firebase/firestore";  
import fireDB from '../firebase/fireConfig';
import {fireproducts} from '../data/initialProducts'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const HomePage = () => {
    const [isLoading, seIstLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [productsIds, setProductsIds] = useState([])
    const {cartItems} = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    const history = useNavigate()

    useEffect(() => {
        handleGetdata()
    }, [])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        const ids = cartItems.map(item=>item.id)
        setProductsIds(ids)
    }, [cartItems])

    const deployProductsData = async() => {
        await fireproducts.map(async product => {
            try {
                await addDoc(collection(fireDB, "products"), product);
            } catch (error) {
                console.log(error.message)
            }
        })
    }

    const handleGetdata = async() => {
        try {
            seIstLoading(true)
            const productsArray = []
            const querySnapshot = await getDocs(collection(fireDB, "products"));
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            const obj = {
                id: doc.id,
                ...doc.data()
            }
            productsArray.push(obj)
            });   
            console.log('products',productsArray)  
            setProducts(productsArray)       
        } catch (error) {
            console.log(error.message)
            seIstLoading(false)
        } finally {
            seIstLoading(false)
        }

    }

    const handleAddToCart = (product) => {
        dispatch({type: 'ADD_TO_CART', payload: product})
    }

    const handleAddData = async() => {
        // Add a new document with a generated id.
        try {
            const docRef = await addDoc(collection(fireDB, "users"), {
                name: "Tokyo",
                country: "Japan"
            });
            console.log("Document written with ID: ", docRef.id);            
        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <Layout isLoading={isLoading}>
            {/* <h1>home page</h1>
            <button onClick={deployProductsData}>deploy data</button>
            <button onClick={handleGetdata}>get data</button> */}
            <div className="container">
                <div className="row">
                    {products.map(product=> {
                        return <div className="col-md-4" key={product.id}>
                                    <div className="mb-2 pb-2 m-1 p-1 product position-relative">
                                        <div className="product-content">
                                            <h4>{product.name.length < 40 ? product.name : product.name.slice(0,40)+"..."}</h4>
                                            <div className="img-wrapper">
                                                <img src={product.imageUrl} alt={product.imageUrl} className="product-img"/>
                                            </div>
                                        </div>
                                        <div className={productsIds.includes(product.id) ?
                                            "product-actions-included":"product-actions"}>
                                            <h2>{`${Number(product.price).toFixed(2)}$`}</h2>
                                            <div className="d-flex">
                                                <button
                                                    // disabled={cartItems?.includes(product)}
                                                    disabled={productsIds.includes(product.id)}
                                                    onClick={()=>handleAddToCart(product)}
                                                    className="mx-2 button-home-info">
                                                    {productsIds.includes(product.id) ?
                                                        <span>
                                                            ADDED {" "}
                                                            <CheckCircleOutlineIcon/>
                                                        </span> :
                                                        <span>
                                                            ADD TO CART {" "}
                                                            <AddShoppingCartTwoToneIcon/>
                                                        </span>
                                                    }

                                                </button>
                                                <button
                                                    className="button-home-info"
                                                    onClick={()=>{
                                                        history(`/productinfo/${product.id}`)
                                                    }}
                                                >
                                                    VIEW {" "}
                                                    <VisibilityTwoToneIcon/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                               </div>
                    })}
                </div>

            </div>
        </Layout>
    );
};

export default HomePage;