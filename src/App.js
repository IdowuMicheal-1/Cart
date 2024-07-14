import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import ListMeals from './Pages/ListMeals/ListMeals';
import CartModal from './Pages/UI/CartModal/CartModal';
import Cartprovider from './store/cartprovider';


function App() {
  const [cart,setCart] = useState(false)

  const showCartModal = () => {
    setCart(true)
  }

  const hideCartModal = () => {
    setCart(false);
  };

  return (
    <Cartprovider>
      {cart &&  <CartModal onClose={hideCartModal} />}
      <ListMeals onShow={showCartModal}/>
    </Cartprovider>
  );
}

export default App;
