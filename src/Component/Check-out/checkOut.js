import React from 'react';

import './checkOut.style.scss';

import {connect} from 'react-redux';
import {selectCartItems,selectorCartTotal} from '../../Redux/Cart/cart-reselect';

import CheckOutItems from '../Checkout-items/checkout-items';

import StripeCheckoutButton from '../StripeCheckout/stripecheckout'


const CheckOut = ({cartItems, total}) =>{
return(
    <div className="checkout-page">
      <div className="checkout-header">
          <div className="header-block">
                <span>Product</span>
          </div>
          <div className="header-block">
                <span>Description</span>
          </div>
          <div className="header-block">
                <span>Quntity</span>
          </div>
          <div className="header-block">
                <span>Price</span>
          </div>
          <div className="header-block">
                <span>Remove</span>
          </div>
     </div> 
        {
            cartItems.map(item =>{
                return <CheckOutItems key={item.id} item = {item}/>
            })
        }
        <div className="total">
            <span>Total : ${total}</span>
        </div>
        <StripeCheckoutButton  price={total}/>
    </div>
)    
}
const  mapStateToProps = (state) =>({
    cartItems : selectCartItems(state),
    total:selectorCartTotal(state)
})


export default connect(mapStateToProps)(CheckOut);