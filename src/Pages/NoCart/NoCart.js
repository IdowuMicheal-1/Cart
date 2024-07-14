import React from 'react'
import cart from '../../Assets/illustration-empty-cart.148f16e3.svg'
import classes from './NoCart.module.css'

const NoCart = () => {
  return (
    <div>
        <div className={classes.centerCart}>
        <img src={cart} className={classes.imgCart}/>
        <p className={classes.cartText}>Your added items will appear here</p>
        </div>
    </div>
  )
}

export default NoCart