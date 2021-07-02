import CartActionType from './cart-action-type'


export const toggleCartHidden = () => ({

    type:CartActionType.TOGGLE_CART_HIDDEN,
    
})
 
  
export const addCartItem =  item =>({
    type:CartActionType.ADD_ITEM,
    payload:item
})

export const deleteCartItem = item =>({
    type: CartActionType.DELETE_ITEM,
    payload:item
})


export const clearItemFromCart = item =>({
    type: CartActionType.CLEAR_ITEM_FROM_CART,
    payload:item
})
