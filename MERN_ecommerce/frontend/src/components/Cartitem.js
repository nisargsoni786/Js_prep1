import React from 'react'
import './cartitem.css';
import {Link} from 'react-router-dom';


function Cartitem({item,qtychangehandler,removehandler}) {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={item.imageUrl}/>    
            </div>            

            <Link to={`/product/${item.product}`} className="cartitem__name">
                <p>{item.name}</p>
            </Link>
            <p className="cartitem__price">
                ${item.price}
            </p>
            <select className="cartitem__select" value={item.qty} onChange={(e)=> qtychangehandler(item.product,e.target.value)}>
                {[...Array(item.countInStock).keys()].map(x=>(
                    <option key={x+1} value={x+1}>{x+1}</option>
                ))}
            </select>

            <button className="cartitem__deleteBtn" onClick={()=>removehandler(item.product)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Cartitem
