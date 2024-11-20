import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const handleLogout = () => {
    document.cookie = 'auth-token=; path=/; max-age=0;'; // Clear the cookie
    alert('Logged out successfully!');
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <nav className='bg-blue-600 p-4'>
      <div className='container mx-auto flex justify-between'>
        <h1 className='text-white text-lg font-bold'>My Wines</h1>
        <div className='space-x-4'>
          <Link href='/' className='text-white'>
            Home
          </Link>
          <Link href='/add-wine' className='text-white'>
            Add Wine
          </Link>
          <Link href='/login' className='text-white'>
            Login
          </Link>
        </div>
        {/* <button onClick={handleLogout} className='text-white hover:underline'>
          Logout
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
