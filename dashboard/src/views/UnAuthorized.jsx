import React from 'react';
import { useNavigate } from 'react-router-dom';

const UnAuthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="backdrop-blur-md bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-gray-700 p-10 rounded-3xl shadow-2xl max-w-md w-full text-center animate-fade-in">
        <div className="text-red-500 text-6xl mb-4">🚫</div>
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2">Unauthorized</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
          Sorry, you don’t have access to this page. Please login with proper credentials.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/login')}
            className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/')}
            className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-700 dark:text-white px-6 py-2 rounded-full text-sm font-medium"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnAuthorized;
