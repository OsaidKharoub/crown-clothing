import React from 'react';

import './checkout-items-style.scss';

import {connect} from 'react-redux'

import {clearItemFromCart,addCartItem,deleteCartItem} from '../../Redux/Cart/cart-action';

const CheckOutItems = ({item, clearItems, addItem ,deleteItem}) =>{
    const {imageUrl, name, quantity, price} = item
    return(
        <div className="checkout-items">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=>deleteItem(item)}>&#10094;</div>
                <span className="value">{quantity}</span>   
            <div className="arrow" onClick={()=> addItem(item)}>&#10095;</div>
        </span>
        <span className="price"> ${price}</span>
        <span className="remove-button" onClick={ ()=> clearItems(item)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    clearItems: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addCartItem(item)),
    deleteItem : item => dispatch(deleteCartItem(item))
    
})

export default connect(null,mapDispatchToProps)(CheckOutItems);