'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CollectEmailPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    //send this to an API here if needed
    setError('');
    window.location.href = 'https://drive.google.com/file/d/14WxGsejZ5voyvTh6jUvWVnHVQKvL64Dx/view?usp=sharing'; // redirect to another page
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-blue-200 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-600 shadow-md rounded-2xl p-8 max-w-md w-full space-y-4"
      >
        <h1 className="text-2xl font-bold text-gray-800">Receba a sua amostra do E-book grátis pelo seu E-mail </h1>
        <input
          type="email"
          placeholder="você@porexemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition"
        >
          enviar
        </button>
      </form>
    </main>
  );
}
