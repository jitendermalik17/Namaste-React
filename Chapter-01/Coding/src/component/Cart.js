import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    
    const cartItems = useSelector( store => store.cart.items);

    const dispatch = useDispatch();

    
    const handleClearCart = () => {
     dispatch(clearCart());
    }

  return (
    <div className="restaurant-list-container about">
    <h1 className="text-3xl">Cart Items {cartItems.length} </h1>
    <button className='bg-green-100 p-2' onClick={ () => handleClearCart() }>Clear Cart</button>
    <div className='restaurant-list-container'>
   
    {cartItems.map(item => <FoodItem key={item.id} {...item} /> )}    
    </div>
    </div>
  )
}

export default Cart