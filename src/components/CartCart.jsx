function CartCart({ product ,quantity}) {
  return (
    <>
    { quantity && (
    <div className="flex flex-col sm:flex-row items-center gap-5 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">

      {/* Product Image */}
      <div className="w-28 h-28 bg-gray-50 rounded-xl flex items-center justify-center p-3 shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 text-center sm:text-left">
        <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
          {product.category}
        </p>

        <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          ★ {product.rating.rate} ({product.rating.count} reviews)
        </p>

        <button className="text-sm text-red-500 mt-3 hover:text-red-700">
          Remove
        </button>
      </div>

      {/* Quantity */}
      <div className="flex items-center border border-gray-200 rounded-lg">
        <button className="px-3 py-2 hover:bg-gray-100">−</button>
        <span className="px-3 py-2 text-sm">{product.quantity}</span>
        <button className="px-3 py-2 hover:bg-gray-100">+</button>
      </div>

      {/* Price */}
      <div className="text-lg font-bold text-gray-900 min-w-20 text-center">
        ${product.price}
      </div>

    </div>
    )}
    </>
  );
}

export default CartCart;