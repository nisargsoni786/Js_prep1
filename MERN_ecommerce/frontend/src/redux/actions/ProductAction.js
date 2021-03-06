import * as actiontypes from './../constants/productconstant';
import axios from 'axios';

export const getProducts=()=> async (dispatch,getState)=>{
    try{
        dispatch({type:actiontypes.GET_PRODUCTS_REQUEST})

        const {data}= await axios.get('api/products');
        console.log(data)

        dispatch({
            type:actiontypes.GET_PRODUCTS_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:actiontypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getProductDetails=(id)=> async (dispatch,getState)=>{
    try{
        dispatch({type:actiontypes.GET_PRODUCT_DETAILS_REQUEST})

        const {data}= await axios.get(`/api/products/${id}`);
        console.log(data)

        dispatch({
            type:actiontypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:actiontypes.GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const removeProductDetails=()=> (dispatch)=>{
     dispatch({
         type:actiontypes.GET_PRODUCT_DETAILS_RESET,
     })
}