import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-72 px-2 py-1"
      />

      {username !== '' && (
        <div>
          <button className="focus:bg-oranage-300 mt-8 inline-block rounded-full bg-orange-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-50 transition-all duration-300 hover:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-offset-2 disabled:cursor-not-allowed">
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
