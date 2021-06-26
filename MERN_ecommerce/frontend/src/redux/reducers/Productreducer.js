import * as actiontypes from './../constants/productconstant';

export const getProductReducer =(state={products:[] } ,action)=>{
    switch(action.type){

        case(actiontypes.GET_PRODUCTS_REQUEST):
            return {
                loading:true,
                products:[]
            }
        
        case(actiontypes.GET_PRODUCTS_SUCCESS):
            return{
                loading:false,
                products:action.payload 
            }

        case(actiontypes.GET_PRODUCTS_FAIL):
            return{
                loading:false,
                error:action.payload
            }
        
        default:
            return state
            
            
    }
} 

export const getProductDetailsReducer=(state={ product:{} },action)=>{
    switch(action.type){

        case actiontypes.GET_PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
        case actiontypes.GET_PRODUCT_DETAILS_REQUEST:
            return{
                loading:true,
            }
        case actiontypes.GET_PRODUCT_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case actiontypes.GET_PRODUCT_DETAILS_RESET:
            return{
                product:{}
            }
        default:
            return state
    }
}