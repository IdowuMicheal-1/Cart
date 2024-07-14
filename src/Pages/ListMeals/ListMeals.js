import React,{useContext,useState} from 'react'
import classes from './ListMeals.module.css'
import imagess from '../../Assets/image (1).jpeg'
import Cart from '../Cart/Cart'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import CartModal from '../UI/CartModal/CartModal';
import image from '../../Assets/image (1).jpeg'
import image1 from '../../Assets/image (2).jpeg'
import image2 from '../../Assets/image (3).jpeg'
import image3 from '../../Assets/image (4).jpeg'
import image4 from '../../Assets/image (5).jpeg'
import image5 from '../../Assets/image (6).jpeg'
import image6 from '../../Assets/image (7).jpeg'
import image7 from '../../Assets/image (8).jpeg'
import image8 from '../../Assets/image.jpeg'
import CartContext from '../../store/cart-context';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


const ListMeals = (props) => {

   
    const cartCTX = useContext(CartContext)

   

    const DUMMY_MEALS = [
        {
            id: 'n1',
            image: image7,
            name: 'Waffle with Berries',
            sub: 'Waffle',
            price: '6.50'
        },
        {
            id: 'n2',
            image: image2,
            name: 'Vanilla Bean Crème Brûlée',
            sub: 'Crème Brûlée',
            price: '7.00'
        },
        {
            id: 'n3',
            image: image3,
            name: 'Macaron Mix of Five',
            sub: 'Macaron',
            price: '8.00'
        },
        {
            id: 'n4',
            image: image6,
            name: 'Classic Tiramisu',
            sub: 'Tiramisu',
            price: '5.50'
        },
        {
            id: 'n5',
            image:image8,
            name: 'Pistachio Baklava',
            sub: 'Baklava',
            price: '4.00'
        },
        {
            id: 'n6',
            image:image4,
            name: 'Lemon Meringue Pie',
            sub: 'Pie',
            price: '5.00'
        },
        {
            id: 'n7',
            image: image1,
            name: 'Red Velvet Cake',
            sub: 'Cake',
            price: '4.50'
        },
        {
            id: 'n8',
            image:image ,
            name: 'Salted Caramel Brownie',
            sub: 'Brownie',
            price: '4.50'
        },
        {
            id: 'n9',
            image:image5,
            name: 'Vanilla Panna Cotta',
            sub: 'Panna Cotta',
            price: '6.50'
        },
    ]
   
    return (
        <div className={classes.topmeals}>

            <div className={classes.listStyle} >
                <h1 className={classes.topText}>Desserts</h1>
                <div className={classes.itesmStyle}>
                {
                    DUMMY_MEALS.map((meals) => {
                        const addItems = () => {
                        cartCTX.addItemToCart ( {
                           id:meals.id,
                           name:meals.name,
                           sub:meals.sub,
                           price:meals.price,
                           amount:1,
                           image:meals.image
                        })
                       
                    }
                    const cartExist = cartCTX.items.find((items) => items.id === meals.id)
                    const decreaseItem = (id) => {
                        cartCTX.SubtractFromCart(id)
                    }

                    const increaseItem = (items) => {
                        cartCTX.addItemToCart({...items,amount:1})
                    }
                       
                        return (
                           
                                <div>
                                    <div className={classes.imgDiv}>
                                        <img src={meals.image} className={classes.imgStyle} />
                                        {!cartExist ? (<button className={classes.btnCart} onClick ={addItems}><MdOutlineAddShoppingCart size={25} /> <p>Add to cart</p></button>): (<button className={classes.btnCart2}><CiCircleMinus size={40} onClick={decreaseItem.bind(null,meals.id)}/>{cartExist.amount}<CiCirclePlus size={40} onClick={increaseItem.bind(null,meals)}/></button> )}
                                        
                                        
                                    </div>
                                    <p className={classes.tText}>{meals.sub}</p>
                                    <h4 className={classes.sText}>{meals.name}</h4>
                                    <p className={classes.price}>${Number(meals.price).toFixed(2)}</p>
                                </div>
                        )
                    })
                }
                 </div>


            </div>
            <Cart onShow={props.onShow}/>

        </div>
    )
}

export default ListMeals