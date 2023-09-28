import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import { Link } from 'react-router-dom';
import { getUsername } from '../features/user/userSlice';

export default function Home() {
  const username = useSelector(getUsername);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza 🍕
        <br />
        <span className="text-orange-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Link
          to={'/menu'}
          className="hover:bg-oranges-300 mt-8 inline-block rounded-full bg-orange-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-orange-50 transition-all duration-300 focus:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-offset-2 disabled:cursor-not-allowed"
        >
          Continuing order, {username}
        </Link>
      )}
    </div>
  );
}
