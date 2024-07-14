import React, { useContext } from 'react'
import carbon from '../../Assets/icon-carbon-neutral.svg'
import classes from './ShowCart.module.css'
import { MdOutlineCancel } from "react-icons/md";
import CartContext from '../../store/cart-context';

const ShowCart = (props) => {
    const cartCtx = useContext(CartContext)

    return (
        <div>
            {
                cartCtx.items.map((items) => {
                    const removeItemsCartBtn = (id) => {
                        cartCtx.removeItemFromCart(id)
                    }
                    return (
                        <div>
                            <div className={classes.cartItems}>
                                <h4 className={classes.cartName}>{items.name}</h4>
                                <div className={classes.cartSt}><div className={classes.cartDetails}>{items.amount}x<p className={classes.cartPrice}>@${Number(items.price).toFixed(2)}</p><p className={classes.cartPriceT}>${Number(items.amount * items.price).toFixed(2)}</p></div>
                                    <MdOutlineCancel size={30} style={{ cursor: 'pointer', color: '#ad8a85' }} onClick ={removeItemsCartBtn.bind(null,items.id)} />
                                </div>
                            </div>
                            <hr style={{ marginTop: '20px', marginBottom: '30px' }} />
                        </div>
                    )
                })
            }

            <div className={classes.amountInfo}>
                <p>Order Total</p>
                <h4 className={classes.priceAmount}>${cartCtx.totalAmount.toFixed(2)}</h4>
            </div>
            <div className={classes.carbonDiv}>
                <img src={carbon} />
                <p className={classes.carbonT}>This is a <span className={classes.carbonText}> carbon-neutral </span>delivery</p>
            </div>
            <button className={classes.btnOrder} onClick={props.onShow}>Confirm Order</button>
        </div>
    )
}

export default ShowCart