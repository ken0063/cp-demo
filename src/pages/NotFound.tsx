import React from 'react';

export default function NotFound() {
  return (
    <div>
      <span>Please Login</span>
      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 p-2  h-10 w-40 text-white font-medium rounded outline-none focus:outline-none"
      >
        Login
      </button>
    </div>
  );
}
