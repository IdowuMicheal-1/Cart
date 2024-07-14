import React, { useReducer } from 'react'
import CartContext from './cart-context'


const defaultItems = {
    items: [],
    totalPrice:0,
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.items.price * action.items.amount
        const existingCartItemsIndex = state.items.findIndex((items) => items.id === action.items.id)
        const existingCartItem=state.items[existingCartItemsIndex]

        let updatedItems
         if (existingCartItem) {
            const updatedItem={
                ...existingCartItem,amount:existingCartItem.amount + action.items.amount
            }
            updatedItems=[...state.items]
            updatedItems[existingCartItemsIndex]=updatedItem
         }
         else{
            updatedItems = state.items.concat(action.items)
         }
        return {
            items:updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        
        const existingCartItemsIndex = state.items.findIndex((items) => items.id === action.id) 
        const existingCartItem = state.items[existingCartItemsIndex]
        const updatedTotalAmount = state.totalAmount - existingCartItem.price

        let updatedItems;
       
        updatedItems = state.items.filter ((items) => items.id !== action.id)
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }

    if (action.type === 'DECREASE') {
        const existingCartItemsIndex=state.items.findIndex((items) => items.id === action.id)
        const existingCartItem = state.items[existingCartItemsIndex]
        const updatedTotalAmount = state.totalAmount - existingCartItem.price

        let updatedItems

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter((items) => items.id !== action.id)
        }
        else{
            const updatedItem={
                ...existingCartItem,amount:existingCartItem.amount -1
            }
            updatedItems=[...state.items]
            updatedItems[existingCartItemsIndex] = updatedItem
        }
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }

    if (action.type === 'RESET') {
        return defaultItems
    }
    return defaultItems

}

const Cartprovider = (props) => {
    const [intialItemsState, dispatchCartAction] = useReducer(cartReducer, defaultItems)



    const addItemsHandler = (items) => {
        dispatchCartAction({
            type: 'ADD',
            items: items,
        })
    }

    const removeItemsHandler = (id) => {
        dispatchCartAction(
            {
                type: 'REMOVE',
                id: id
            }
        )

    }

    const resetItemsHandler = () => {
        dispatchCartAction({
            type:'RESET',
        })
    }

    const decreaseCartHandler = (id) => {
        dispatchCartAction({
            type:'DECREASE',
            id:id
        })
    }

    const cartItems = {
        items: intialItemsState.items,
        totalAmount: intialItemsState.totalAmount,
        addItemToCart: addItemsHandler,
        removeItemFromCart: removeItemsHandler,
        SubtractFromCart: decreaseCartHandler,
        resetCart: resetItemsHandler,
    }

    return (
        <div>
            <CartContext.Provider value={cartItems}>
                {props.children}
            </CartContext.Provider>
        </div>
    )
}

export default Cartprovider