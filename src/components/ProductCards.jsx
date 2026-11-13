import { useContext } from "react";
import { MyStore } from "../context/MyContext";

function ProductCard({ product ,isInCart}) {
  let {setCartItem ,increamentQuantity,decreamentQuantity} = useContext(MyStore);

  const addToCart = ()=>{
    setCartItem((prev)=> [...prev,{...product,quantity:1}])
    alert("Product added into cart")
  }
  return (
    <div className="bg-white rounded-2xl shadow-md
                    overflow-hidden border border-gray-100
                    hover:shadow-xl transition duration-300">

      {/* Product Image */}
      <div className="bg-gray-100 h-64 flex items-center
                      justify-center p-6">

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain
                     hover:scale-105 transition duration-300"
        />

      </div>

      {/* Product Information */}
      <div className="p-5">

        {/* Category and Rating */}
        <div className="flex justify-between items-center mb-3">

          <span className="text-xs uppercase tracking-wider
                           text-gray-500 font-semibold">
            {product.category}
          </span>

          <span className="text-sm text-yellow-500">
            ★ {product.rating.rate}
            <span className="text-gray-400 ml-1">
              ({product.rating.count})
            </span>
          </span>

        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800
                       line-clamp-2 min-h-14">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2
                      line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-5 flex items-center
                        justify-between">

          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-xs text-green-600 font-medium">
            In Stock
          </span>

        </div>

        {/* Buttons */}
         {
          isInCart? ( <button className="w-full bg-gray-600 flex justify-center gap-5 rounded">
            <span onClick={()=> decreamentQuantity(product.id)} className="text-4xl text-red-500">-</span><span className="text-4xl">{isInCart.quantity}</span>
          <span onClick={()=> increamentQuantity(product.id)} className="text-4xl text-green-500">+</span></button>):
          (
            <button onClick={addToCart} className="w-full bg-black rounded p-2 cursor-pointer ">
            Add to Cart
          </button>
          )
         }
      </div>

    </div>
  );
}

export default ProductCard;

