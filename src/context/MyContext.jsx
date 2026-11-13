import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
export const MyStore = createContext();
export const ContextProvider = ({children})=>{
  const [isCartOpen,setIsCartOpen] = useState(false)
  const [cartItem,setCartItem] = useState([])
  console.log(cartItem)
  const increamentQuantity = (id) =>{
    setCartItem((prev)=>{
        return prev.map((val)=>{
            return val.id=== id ?{...val,quantity:val.quantity+1}: val;
        })
    })
  }
  const decreamentQuantity = (id) =>{
    setCartItem((prev)=>{
        return prev.map((val)=>{
            return val.id=== id && val.quantity>0?{...val,quantity:val.quantity-1}: val;
        })
    })
  }
    return <MyStore.Provider
        value={{isCartOpen,setIsCartOpen,cartItem,setCartItem,increamentQuantity,decreamentQuantity}}
    >
        {children}
    </MyStore.Provider>
}

