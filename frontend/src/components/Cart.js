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
    <div>
      <h1 className="text-3xl font-bold mb-4">Cart Page</h1>
        <button className="bg-red-600 rounded-md px-4 py-2 shadow-md text-white" onClick={()=>handleClearCart()}>Clear Cart</button>
        {cartItems.length === 0 && <h2 className="text-xl mt-4">Your cart is empty Please add some items.</h2>}
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;