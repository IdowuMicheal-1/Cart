import React from 'react'

const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItemToCart: (items) => {},
    removeItemFromCart: (id) => {},
    SubtractFromCart : id => {}
})

export default CartContext;