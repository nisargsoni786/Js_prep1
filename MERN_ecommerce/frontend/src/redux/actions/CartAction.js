import * as actiontypes from './../constants/cartconstants';
import axios from 'axios';

export const addToCart=(id,qty)=>async (dispatch,getState)=> {
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type:actiontypes.ADD_TO_CART,
        payload:{
            product:data._id,
            name:data.name,
            imageUrl:data.imageUrl,
            price:data.price,
            countInStock:data.countInStock,
            qty:qty
        }
    })

    localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems))

}

export const removeFromCart=(id)=> async (dispatch,getState)=>{
    dispatch({
        type:actiontypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems))

}