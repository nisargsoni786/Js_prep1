import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import './cart.css';
import Cartitem from './../components/Cartitem';
import { addToCart,removeFromCart } from '../redux/actions/CartAction';
 

function Cart() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart;
    
    const qtychangehandler=(id,qty)=>{
        dispatch(addToCart(id,qty))
    }

    const removeFromCarthandler=(id)=>{
        dispatch(removeFromCart(id))
    }

    const getCartCount=()=>{
        return cartItems.reduce((qty,item)=> Number(item.qty)+qty,0);
    }

    const getSubTotal=()=>{
        return cartItems.reduce((price,item)=> (item.price*item.qty)+ price,0)
    } 

    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping cart</h2>
                {cartItems.length===0 ? "Your cart is empty...go back to SHOP" :
                cartItems.map(item=>(
                    <Cartitem key={item.product} item={item} qtychangehandler={qtychangehandler} removehandler={removeFromCarthandler}/>
                ))
                }
            </div>
 
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Total ({getCartCount()}) items</p>
                    <p>${getSubTotal()}</p>
                </div>
                <div>
                    <button>
                        Proceed to checkout !
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Cart