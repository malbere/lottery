import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <img
          src="/img/logo.png"
          alt="Logo"
          className="w-271 h-101 mr-4"
          style={{ left: '366px' }}
        />
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
          style={{ width: '66px', height: '22px', top: '42px', color: '#8D9198' }}
        >
          Register
        </button>
        <button
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
          style={{ width: '66px', height: '22px', top: '42px', color: '#8D9198' }}
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
