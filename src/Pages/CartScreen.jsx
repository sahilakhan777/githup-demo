import React, { useContext } from 'react'
import CartCart from '../components/CartCart'
import { MyStore } from '../context/MyContext'

const CartScreen = () => {
  let {cartItem} = useContext(MyStore);
  return (
    <div className='h-[95%] grid grid-cols-3'>
      {
        cartItem.map((elem)=>{
          let quantity = elem.quantity>0
          return <CartCart key={elem.id} product={elem} quantity={quantity}/>
        })
      }
    </div>
  )
}

export default CartScreen
