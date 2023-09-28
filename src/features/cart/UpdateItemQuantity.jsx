import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantityItem,
  getCurrentQuantityById,
  increaseQuantityItem,
} from './cartSlice';

export default function UpdateItemQuantit({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantityById = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <button
        className="focus:ring-oranges-300 inline-block rounded-full bg-orange-400 px-4 py-3 text-xs font-bold uppercase tracking-wide text-stone-50 transition-all duration-300 hover:bg-orange-300 focus:bg-orange-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed"
        onClick={() => dispatch(decreaseQuantityItem(pizzaId))}
      >
        -
      </button>
      <span className="text-sm font-medium">{currentQuantityById}</span>
      <button
        className="focus:ring-oranges-300 inline-block rounded-full bg-orange-400 px-4 py-3 text-xs font-bold uppercase tracking-wide text-stone-50 transition-all duration-300 hover:bg-orange-300 focus:bg-orange-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed"
        onClick={() => dispatch(increaseQuantityItem(pizzaId))}
      >
        +
      </button>
    </div>
  );
}
