import React,{useEffect,useState} from 'react'
import './productscreen.css';
import { useSelector, useDispatch } from "react-redux";
// import axios from 'axios';

import {getProductDetails} from './../redux/actions/ProductAction';
import {addToCart} from './../redux/actions/CartAction';

function Product({match,history}) {

    const [qty, setqty] = useState(1);
    const dispatch = useDispatch();

    const productdetails=useSelector(state => state.getProductDetail)
    const {loading,error,product} =productdetails

    useEffect(() => {
        if(product && match.params.id!== product._id){
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch,match,product]);

    const addToCartHandler=()=>{
        dispatch(addToCart(product._id,qty))
        history.push('/cart')
    }

    return (
        <div className="productscreen">
            {loading ? <h2>Please wait ...</h2> : error ? <h2>{error}</h2> : (
                <>
                        <div className="productscreen__left">
                <div className="left__image">
                    <img src={product.imageUrl} />
                </div>
                <div className="left__info">
                    <p className="left__name">{product.name}</p>
                    <p className="">Price : ${product.price}</p>
                    <p className="">{product.description}</p>
                </div>
            </div>
            
             <div className="productscreen__right">
                <div className="right__info">
                    <p>Price : <span>${product.price}</span></p>
                    <p>Status : <span>{product.countInStock>0 ? "In Stock" : "OUT OF STOCK"}</span></p>
                    <p>
                        Qantity : 
                        <select value={qty} onChange={(e)=> setqty(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map(x=>(
                                <option key={x+1} value={x+1}>{x+1}</option>
                            ))}
                        </select>
                    </p>
                    <p>
                        <button type="button" onClick={addToCartHandler}>
                            Add To Cart
                        </button>
                    </p>
                </div>
            </div>
                </>
            )}
            

        </div>
    )
}

export default Product
