import CartActionType from './cart-action-type';
import {addItemToCart, deleteItemFromCart } from './cart-utils'
 
const INITIAL_STATE = {
hidden : true,
cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){

        case CartActionType.TOGGLE_CART_HIDDEN:
        return {
            ...state,
            hidden: !state.hidden
        };

        case CartActionType.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionType.DELETE_ITEM:
            return{
                ...state,
                cartItems : deleteItemFromCart(state.cartItems,action.payload)

            }    

        case  CartActionType.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id )
            }    

        default :
        return state;
    }
}

export default cartReducer;