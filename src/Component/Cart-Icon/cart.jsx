import React from 'react';
import cartimg from './cart.png';
import './cart.scss';
import {connect} from 'react-redux';
import {toggleCartHidden}  from '../../Redux/Cart/cart-action';
import {selectCartItemsCount}  from '../../Redux/Cart/cart-reselect';

const Cart = ({toggleCartHidden ,itemCount }) =>{
   
    return(
        <div className="cart-shop" onClick={toggleCartHidden}>
         <img src={cartimg} alt="shoping"  className="shoping-icon"/>
          <span className ="item-count">{
                 itemCount
          }</span>
        </div>
    )
}
const mapStateToProps = (state) => ({
   itemCount: selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () =>{ dispatch(toggleCartHidden()) }
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart) ;