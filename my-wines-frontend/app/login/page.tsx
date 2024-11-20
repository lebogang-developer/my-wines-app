'use client';

import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Login
          </button>
        </form>
        <p className='text-sm text-gray-600 text-center mt-4'>
          Don't have an account?{' '}
          <a href='/signup' className='text-blue-600 hover:underline'>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
