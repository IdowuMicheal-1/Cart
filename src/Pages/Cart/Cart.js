import React, {useContext,useState} from 'react'
import classes from './Cart.module.css'
import NoCart from '../NoCart/NoCart'
import ShowCart from '../ShowCart/ShowCart';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const [available, setAvailable] = useState(false)
  
  const cartCtx=useContext(CartContext)
  const crtHAsNumber= cartCtx.items.length > 0
  const cartNumber = cartCtx.items.reduce((total,initial) => {
    return (total + initial.amount)
  },0)
  // setAvailable(crtHAsNumber)
  // const crtHAsNumber
  return (
    <div className={classes.cartstyle}>
        <h4 className={classes.cartNum}>Your Cart({cartNumber})</h4>
        {crtHAsNumber  &&  <ShowCart onShow={props.onShow} />}
        {!crtHAsNumber &&  <NoCart />}

       
      
    </div>
  )
}

export default Cart