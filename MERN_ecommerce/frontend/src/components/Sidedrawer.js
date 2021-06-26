import React from 'react'
import './sidedrawer.css'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Sidedrawer({click,show}) {

    const cart = useSelector(state => state.cart)
    const {cartItems}=cart;

    const getCartCount=()=>{
        return cartItems.reduce((qty,item)=> qty+Number(item.qty),0)
    }

    const sideDrawerClass=["sideDrawer"];

    if(show){
        sideDrawerClass.push("show");
    }

    return show && (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sideDrawer__links" onClick={click}>
                <li>
                    <Link to='/cart'>
                        <i className="fas fa-shopping-cart"></i>
                            Cart<span className="sideDrawer__cartbadge" >{getCartCount()}</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
            </ul>
            
        </div>
    )
}

export default Sidedrawer
