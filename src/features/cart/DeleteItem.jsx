import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <button
      className="focus:ring-oranges-300 inline-block rounded-full bg-orange-400 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-stone-50 transition-all duration-300 hover:bg-orange-300 focus:bg-orange-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed"
      onClick={() => dispatch(deleteItem(pizzaId))}
    >
      Delete
    </button>
  );
}
