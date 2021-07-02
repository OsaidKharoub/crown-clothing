import React from 'react' ;

import CustomButton from '../custom-button/custombutton';

import {connect} from 'react-redux';

import CartItem from '../Cart-Items/cart-items';

import {selectCartItems}  from '../../Redux/Cart/cart-reselect';

import './cart-dropdown-style.scss';

import {withRouter} from "react-router-dom";

import {toggleCartHidden} from '../../Redux/Cart/cart-action';

const CartDropdown = ({cartItems, history, dispatch}) =>{
    return(
        <div className="dropDown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map( cartitem =>{
                     return   <CartItem key={cartitem.id} item={cartitem}/>
                    })  
                    :
                    <span className="empty">Your Cart Is Empty !</span>
                }
            </div>
            <CustomButton onClick={()=> {history.push('/checkout');
                                       dispatch(toggleCartHidden());
            }}
              > GO TO CHECKOUT </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown)) ;