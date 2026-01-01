import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">🛒 Your Cart</h1>
          {cartItems.length > 0 && (
            <button 
              className="bg-red-600 hover:bg-red-700 rounded-lg px-6 py-3 shadow-md text-white font-semibold transition-colors" 
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500">Please add some items to get started!</p>
          </div>
        ) : (
          <div>
            <div className="mb-4 text-gray-600 text-lg">
              <span className="font-semibold">{cartItems.length}</span> item{cartItems.length !== 1 ? 's' : ''} in cart
            </div>
            <ItemList items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;