import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import { clearCart, getCart } from './cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Link
          to="/order/new"
          className="inline-block rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-50 transition-all duration-300 hover:bg-orange-300 focus:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-offset-2 disabled:cursor-not-allowed"
        >
          Order pizzas
        </Link>
        <button
          className="inline-block rounded-full border-2 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-400 transition-all duration-300 hover:bg-orange-200 hover:text-stone-600 focus:bg-orange-200 focus:text-stone-800 focus:outline-none focus:ring focus:ring-orange-200 focus:ring-offset-2 disabled:cursor-not-allowed"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
