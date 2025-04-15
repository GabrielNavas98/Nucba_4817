export const addItemToCart = (cartItems, producto) => {
    const productInCart = cartItems.find((item) => item.id === producto.id )

    if(productInCart){
        return cartItems.map((item) => 
            item.id === producto.id 
            ? {...item , quantity: item.quantity + 1 }
            : item       
        )
    }

    return [...cartItems, {...producto, quantity: 1}]
}

export const removeItemFromCart = (cartItems, id) => {
    const productToRemove = cartItems.find((item) => item.id == id)

    if(productToRemove.quantity > 1){
        return cartItems.map((item) => 
            item.id === id 
            ? {...item, quantity: item.quantity - 1}
            : item
        )
    }

    return cartItems.filter((item) => item.id !== productToRemove.id)
}

export const resetShippingCost = (cartItems, shippingCost) => {
    if(cartItems.length === 1 && cartItems[0].quantity === 1){
        return 0
    }else{
        return shippingCost
    }
}