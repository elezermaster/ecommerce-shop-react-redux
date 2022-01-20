import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import { doc, collection, setDoc, updateDoc, addDoc, getDocs, getDoc } from "firebase/firestore";  
import fireDB from '../firebase/fireConfig';
import { useParams } from 'react-router';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';

const ProductInfoPage = () => {
    const [isLoading, seIstLoading] = useState(false)
    const [product, setProduct] = useState()
    const params = useParams()
    //console.log('params',params?.productId)
    useEffect(() => {
        handleGetData()

    }, [])

    const handleGetData = async() => {
        try {
            seIstLoading(true)
            //const productsArray = []
            const querySnapshot = await getDoc(doc(fireDB, "products", params?.productId));
            // querySnapshot.forEach((doc) => {
            // // doc.data() is never undefined for query doc snapshots
            // //console.log(doc.id, " => ", doc.data());
            // const obj = {
            //     id: doc.id,
            //     ...doc.data()
            // }
            // productsArray.push(obj)
            // });   
            console.log('product',querySnapshot.data())  
            setProduct(querySnapshot.data())       
        } catch (error) {
            console.log(error.message)
            seIstLoading(false)
        } finally {
            seIstLoading(false)
        }

    }

    return (
        <Layout isLoading={isLoading}>
            {product && 
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-md-8">
                        <h1>{product.name}</h1>
                        <img 
                            className="product-info-img"
                            src={product.imageUrl} 
                            alt={product.imageUrl} />
                        <hr />
                        <p>{product.description}</p>
                        <div className="d-flex justify-content my-3">
                            <button className="">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            }
        </Layout>
    );
};

export default ProductInfoPage;