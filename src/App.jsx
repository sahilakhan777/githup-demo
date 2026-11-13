import axios from "axios"
import Navbar from "./components/Navbar"
import ProductCards from "./components/ProductCards"
import { useContext, useEffect, useState } from "react"
import CartScreen from "./Pages/CartScreen"
import { MyStore } from "./context/MyContext"
const App = () => {
  let {isCartOpen,cartItem} = useContext(MyStore);
  const [productData,setProductsData] = useState([])
  // console.log(cartItem)
   console.log(productData)
  const getProductsData = async ()=>{
    try {
      let res = await axios.get('https://fakestoreapi.com/products')
      setProductsData(res.data)
    } catch (error) {
      console.log("error in api",error)
    }
  }

  useEffect(()=>{
    getProductsData();
  },[])


  return (
    <div className='h-screen p-2 flex flex-col gap-4'>
      <Navbar /> 
      
      {
        isCartOpen ? <div className="">
       <CartScreen/>
      </div> : <div className="grid grid-cols-4 gap-4">
        {
          productData.map((elem )=>{
            let isInCart = cartItem.find((val)=> val.quantity>0 && val.id === elem.id)
            console.log(isInCart)
            return <ProductCards key={elem.id} product={elem} isInCart={isInCart}/>
          })
        }
      </div>
      }
    </div>
  )
}

export default App
