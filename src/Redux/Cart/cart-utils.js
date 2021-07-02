export const addItemToCart = (cartItems, cartItemsToAdd) =>{

    const exsttingCartItem =  cartItems.find(cart => cart.id === cartItemsToAdd.id )

    if(exsttingCartItem){
        return cartItems.map( cartItem => 

            cartItem.id === cartItemsToAdd.id 
            ?
            {...cartItem, quantity: cartItem.quantity + 1 }
            : 
            cartItem

        )
    }

    return[...cartItems, {...cartItemsToAdd, quantity: 1} ]
   
}

export const deleteItemFromCart = (cartItems, removeItemCart) =>{

    const exsttingCartItem =  cartItems.find(cart => cart.id === removeItemCart.id );

    if(exsttingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== removeItemCart.id )
    }

    return cartItems.map( cartItem => 
        cartItem.id === removeItemCart.id    
        ?
        {...cartItem, quantity: cartItem.quantity - 1 }
        :
        cartItem
    );
}