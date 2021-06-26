import * as actiontypes from './../constants/cartconstants';

export const cartreducer=(state={cartItems:[]}, action)=>{
    switch(action.type){

        case actiontypes.ADD_TO_CART:
            const item=action.payload;
            
            const existitem=state.cartItems.find((x)=> x.product===item.product)

            if(existitem){
                return{
                    ...state,
                    cartItems: state.cartItems.map(x=> x.product===existitem.product ? item:x)
                }
            }
            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }

        case actiontypes.REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(x=> x.product !== action.payload)
            }

        default:
            return state
    }
}