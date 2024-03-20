import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-items">
      <h1>Cart</h1>
      <div>
        <button className="clear-cart-button" onClick={handleClearCart}>
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Cart is Empty ..... Please add items to the Cart</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
