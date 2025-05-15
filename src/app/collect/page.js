'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CollectEmailPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    setError('Please enter a valid email address.');
    return;
  }

  try {
    // ✅ Send the email to your API route
    const res = await fetch('/api/save-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      throw new Error('Failed to save email.');
    }

    setError('');
    // ✅ Redirect only after saving the email
    window.location.href = 'https://drive.google.com/file/d/14WxGsejZ5voyvTh6jUvWVnHVQKvL64Dx/view?usp=sharing';
  } catch (err) {
    console.error(err);
    setError('Something went wrong. Please try again later.');
  }
};


  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 via-fuchsia-300 to-[#EC8C78] p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#EC8C78] shadow-md rounded-2xl p-8 max-w-md w-full space-y-4"
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
          className="w-full bg-indigo-400 text-white font-semibold py-2 rounded-xl hover:bg-indigo-500 transition"
        >
          enviar
        </button>
      </form>
    </main>
  );
}
