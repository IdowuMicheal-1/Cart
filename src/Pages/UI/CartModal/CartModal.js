import React, { useContext } from 'react'
import confirm from '../../../Assets/icon-order-confirmed.svg'
import imagess from '../../../Assets/image (1).jpeg'
import classes from './CartModal.module.css'
import { Modal } from '../../Modal/Modal'
import CartContext from '../../../store/cart-context'

const CartModal = (props) => {
    const cartCTX = useContext(CartContext)

    const startNewOrderHandler = () => {
        cartCTX.resetCart(); // Call the reset method
        props.onClose(); // Optionally close the modal
    }
    return (
        <Modal onClose={props.onClose}>
            <div>
                <img src={confirm} className={classes.confirmStyle} />
                <h4 className={classes.orderText}>Order Confirmed</h4>
                <p className={classes.pText}>We hope you enjoy your food!</p>

                <div className={classes.modalSub}>
                    {
                        cartCTX.items.map((items) => {
                            return (
                            <div className={classes.modalOne}>
                                <div className={classes.modalsOnes}>
                                    <img src={items.image} className={classes.imgStyles}></img>
                                    <div >
                                        <h4>Macaron Mix of Five</h4>
                                        <div className={classes.modalsSub}>
                                            <p className={classes.modalAmount}>{items.amount}x</p><p>@${Number(items.price).toFixed(2)}</p>
                                        </div>

                                    </div>

                                </div>
                                <h4 className={classes.modalPr}>${Number(items.amount*items.price).toFixed(2)}</h4>
                            </div>
                        )})
                    }



                    <div className={classes.amountInfo}>
                        <p>Order Total</p>
                        <h4 className={classes.priceAmount}>${cartCTX.totalAmount.toFixed(2)}</h4>
                    </div>
                </div>

                <button className={classes.btnOrder} onClick={startNewOrderHandler}>Start New Order</button>
            </div>
        </Modal>
    )
}

export default CartModal